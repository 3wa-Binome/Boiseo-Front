import { useState, useEffect } from "react";
import Navigations from "../organisms/Navigations";
import { BarChart } from "@mui/x-charts/BarChart";
import { authStore } from "../../store/authStore.js";
import { fetchUserById } from "../../api/userApi";
import { createMaterial } from "../../api/materialApi";
import { fetchSuppliersByUser, createSupplier } from "../../api/supplierApi";
import { Link } from "react-router-dom";

function estimateChartWidth(categories) {
    const maxLabelLength = Math.max(...categories.map(category => category.name.length), 0);
    const minWidth = 350;
    const widthPerCategory = Math.max(60, maxLabelLength * 12);
    return Math.max(minWidth, categories.length * widthPerCategory);
}

export default function Dashboard() {
    const user = authStore((state) => state.user);
    const [categoryNames, setCategoryNames] = useState([]);
    const [categoryCounts, setCategoryCounts] = useState([]);
    const [materials, setMaterials] = useState([]);
    const [data, setData] = useState({});
    const [width, setWidth] = useState();
    const [materialName, setMaterialName] = useState("");
    const [materialQuantity, setMaterialQuantity] = useState(1);
    const [materialDescription, setMaterialDescription] = useState("");
    const [materialSupplierId, setMaterialSupplierId] = useState("");
    const [suppliers, setSuppliers] = useState([]);
    const [supplierName, setSupplierName] = useState("");
    const [supplierDescription, setSupplierDescription] = useState(""); // nouvel état
    const height = Math.max(180, Math.min(350, width * 0.6));

    const fetchData = async () => {
        const datas = await fetchUserById(user.id);
        setData(datas);
        setCategoryNames(datas.categories.map(category => category.name));
        setCategoryCounts(datas.categories.map(category => category.productCount));
        setWidth(estimateChartWidth(datas.categories));
        if (datas.materials) {
            setMaterials(datas.materials);
        }
    };

    const fetchAllSuppliers = async () => {
        const res = await fetchSuppliersByUser(user.id);
        setSuppliers(res);
        if (Array.isArray(res) && res.length > 0 && !materialSupplierId) {
            setMaterialSupplierId(res[0].id);
        }
    };

    useEffect(() => {
        fetchData().catch(console.error);
        fetchAllSuppliers().catch(console.error);
        // eslint-disable-next-line
    }, []);

    const handleAddSupplier = async (e) => {
        e.preventDefault();
        if (!supplierName.trim() || !supplierDescription.trim()) return;
        try {
            await createSupplier({
                name: supplierName,
                description: supplierDescription,
                userId: user.id // <-- attention au nom du champ
            });
            setSupplierName("");
            setSupplierDescription("");
            fetchAllSuppliers();
        } catch (error) {
            alert("Erreur lors de l'ajout du fournisseur");
            console.error(error);
        }
    };

    const handleAddMaterial = async (e) => {
        e.preventDefault();
        try {
            const res = await createMaterial({
                name: materialName,
                quantity: materialQuantity,
                description: materialDescription,
                userId: user.id, // <-- camelCase
                supplierId: materialSupplierId // <-- camelCase
            });
            console.log("Matériel créé :", res.data);
            setMaterialName("");
            setMaterialQuantity(1);
            setMaterialDescription("");
            setMaterialSupplierId(suppliers.length > 0 ? suppliers[0].id : "");
            fetchData();
        } catch (err) {
            alert("Erreur lors de la création du matériel");
            console.error(err);
        }
    };

    if (!data) {
        return <div>Chargement...</div>;
    }
    return (
        <div>
            <Navigations />
            <div className="dashboard-container">
                <h1 className="title">Tableau de bord</h1>
                <div>
                    <div className="chart">
                        <div className="chart-container" style={{ width, minWidth: 320, maxWidth: 900 }}>
                            <BarChart
                                xAxis={[{ data: categoryNames, tickLabelStyle: { angle: -30, textAnchor: "end" } }]}
                                series={[
                                    {
                                        data: categoryCounts,
                                        color: "#49adeb",
                                        label: "Quantité",
                                    },
                                ]}
                                width={width}
                                height={height}
                                margin={{ top: 40, right: 30, left: 60, bottom: 70 }}
                                grid={{ vertical: true, horizontal: true }}
                            />
                        </div>
                    </div>
                    <h2>Ajouter un fournisseur</h2>
                    <form onSubmit={handleAddSupplier} style={{ marginBottom: 24 }}>
                        <input
                            type="text"
                            placeholder="Nom du fournisseur"
                            value={supplierName}
                            onChange={e => setSupplierName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            value={supplierDescription}
                            onChange={e => setSupplierDescription(e.target.value)}
                            required
                        />
                        <button type="submit">Ajouter le fournisseur</button>
                    </form>
                    <h2>Ajouter un matériel</h2>
                    <form onSubmit={handleAddMaterial} style={{ marginBottom: 24 }}>
                        <input
                            type="text"
                            placeholder="Nom du matériel"
                            value={materialName}
                            onChange={e => setMaterialName(e.target.value)}
                            required
                        />
                        <input
                            type="number"
                            min={1}
                            placeholder="Quantité"
                            value={materialQuantity}
                            onChange={e => setMaterialQuantity(Number(e.target.value))}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            value={materialDescription}
                            onChange={e => setMaterialDescription(e.target.value)}
                            required
                        />
                        <select
                            value={materialSupplierId}
                            onChange={e => setMaterialSupplierId(e.target.value)}
                            required
                            disabled={suppliers.length === 0}
                        >
                            {suppliers.length === 0 && <option>Aucun fournisseur</option>}
                            {suppliers.map(supplier => (
                                <option key={supplier.id} value={supplier.id}>
                                    {supplier.name}
                                </option>
                            ))}
                        </select>
                        <button type="submit">Ajouter</button>
                    </form>
                    <h2>Liste des matériaux</h2>
                    <ul>
                        {materials.map((m) => (
                            <li key={m.id}>
                                <Link to={`/materials/${m.id}`} className="material-link">
                                    {m.name.toLowerCase()}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}