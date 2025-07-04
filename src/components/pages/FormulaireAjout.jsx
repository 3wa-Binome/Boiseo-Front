import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { createProduct } from "../../api/productApi";
import { createCategory } from "../../api/categoryApi";
import { createMaterial, fetchMaterialsByUser } from "../../api/materialApi";
import { createSupplier } from "../../api/supplierApi";
import { fetchCategoryById } from "../../api/categoryApi";
import { authStore } from "../../store/authStore";

export default function FormulaireAjout() {
    const { type, categoryId: routeCategoryId } = useParams();
    const user = authStore(state => state.user);

    const [nom, setNom] = useState("");
    const [description, setDescription] = useState("");
    const [quantite, setQuantite] = useState(0);
    const [category, setCategory] = useState(null);
    const [selectedCategoryId, setSelectedCategoryId] = useState(routeCategoryId || "");
    const [pictureUrl, setPictureUrl] = useState("");
    const [message, setMessage] = useState("");
    const [materials, setMaterials] = useState([]);
    const [productsMaterials, setProductsMaterials] = useState([
        { materialId: "", quantity: 0 }
    ]);

    useEffect(() => {
        if (type === "produit" && routeCategoryId && user?.id) {
            fetchCategoryById(routeCategoryId)
                .then(res => setCategory(res?.data || null))
                .catch(() => setCategory(null));
            fetchMaterialsByUser(user.id)
                .then(res => setMaterials(res?.data || res || []))
                .catch(() => setMaterials([]));
        }
    }, [type, routeCategoryId, user]);

    const handleMaterialChange = (idx, field, value) => {
        const updated = productsMaterials.map((pm, i) =>
            i === idx ? { ...pm, [field]: value } : pm
        );
        setProductsMaterials(updated);
    };

    const addMaterial = () => {
        setProductsMaterials([...productsMaterials, { materialId: "", quantity: 0 }]);
    };

    const removeMaterial = (idx) => {
        setProductsMaterials(productsMaterials.filter((_, i) => i !== idx));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        try {
            switch (type) {
                case "produit":
                    await createProduct({
                        name: nom,
                        description,
                        quantity: Number(quantite),
                        categoryId: selectedCategoryId,
                        pictures: pictureUrl ? [pictureUrl] : [],
                        materials: productsMaterials
                            .filter(pm => pm.materialId && pm.quantity > 0)
                            .map(pm => ({
                                materialId: pm.materialId,
                                quantity: Number(pm.quantity)
                            }))
                    });
                    setMessage("Produit ajouté !");
                    break;
                case "categorie":
                    await createCategory({ name: nom, userId: user.id });
                    setMessage("Catégorie ajoutée !");
                    break;
                case "materiau":
                    await createMaterial({ nom });
                    setMessage("Matériau ajouté !");
                    break;
                case "fournisseur":
                    await createSupplier({ nom });
                    setMessage("Fournisseur ajouté !");
                    break;
                default:
                    setMessage("Type inconnu.");
            }
            setNom("");
            setDescription("");
            setQuantite(0);
            setSelectedCategoryId(routeCategoryId || "");
            setPictureUrl("");
            setProductsMaterials([{ materialId: "", quantity: 0 }]);
        } catch {
            setMessage("Erreur lors de l'ajout.");
        }
    };

    if (type === "categorie") {
        return (
            <div className="formulaire-ajout">
                <h2>Ajouter une catégorie</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nom&nbsp;:
                        <input
                            type="text"
                            value={nom}
                            onChange={e => setNom(e.target.value)}
                            placeholder="Nom de la catégorie"
                            required
                        />
                    </label>
                    <button type="submit">Ajouter</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        );
    }

    return (
        <div className="formulaire-ajout">
            <h2>Ajouter {type === "produit" ? "un produit" : type === "materiau" ? "un matériau" : type === "fournisseur" ? "un fournisseur" : type}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nom&nbsp;:
                    <input
                        type="text"
                        value={nom}
                        onChange={e => setNom(e.target.value)}
                        placeholder={`Nom du ${type}`}
                        required
                    />
                </label>
                {type === "produit" && category && (
                    <>
                        <label>
                            Description&nbsp;:
                            <textarea
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Quantité&nbsp;:
                            <input
                                type="number"
                                value={quantite}
                                min="0"
                                onChange={e => setQuantite(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Catégorie actuelle&nbsp;:
                            <input
                                type="text"
                                value={category.name}
                                disabled
                                readOnly
                            />
                        </label>
                        <label>
                            URL de la photo&nbsp;:
                            <input
                                type="url"
                                value={pictureUrl}
                                onChange={e => setPictureUrl(e.target.value)}
                                placeholder="https://exemple.com/photo.jpg"
                            />
                        </label>
                        <fieldset>
                            <legend>Matériaux utilisés</legend>
                            {productsMaterials.map((pm, idx) => (
                                <div key={idx} style={{ display: "flex", gap: 8, marginBottom: 4 }}>
                                    <select
                                        value={pm.materialId}
                                        onChange={e => handleMaterialChange(idx, "materialId", e.target.value)}
                                        required
                                    >
                                        <option value="">-- Matériau --</option>
                                        {materials.map(mat => (
                                            <option key={mat.id} value={mat.id}>{mat.name}</option>
                                        ))}
                                    </select>
                                    <input
                                        type="number"
                                        min="1"
                                        value={pm.quantity}
                                        onChange={e => handleMaterialChange(idx, "quantity", e.target.value)}
                                        placeholder="Quantité"
                                        required
                                    />
                                    {productsMaterials.length > 1 && (
                                        <button type="button" onClick={() => removeMaterial(idx)}>-</button>
                                    )}
                                </div>
                            ))}
                            <button type="button" onClick={addMaterial}>+ Ajouter un matériau</button>
                        </fieldset>
                    </>
                )}
                <button type="submit">Ajouter</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}