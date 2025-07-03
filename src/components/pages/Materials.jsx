import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMaterialById } from "../../api/materialApi";

export default function Materials() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [material, setMaterial] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMaterial = async () => {
            try {
                const response = await fetchMaterialById(id);
                console.log("Matériau récupéré :", response);
                
                if (response && response.data) {
                    setMaterial(response.data);
                } else {
                    console.error("Aucune donnée trouvée");
                }
            } catch (error) {
                console.error("Erreur:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMaterial();
    }, [id]);

    if (isLoading) {
        return <p>Chargement du matériau...</p>;
    }

    if (!material) {
        return <p>Matériau non trouvé.</p>;
    }

    return (
        <div className="materials-page">
            <div className="materials-container">
                <button
                    className="back-btn"
                    onClick={() => navigate(-1)}
                    style={{
                        marginBottom: "1rem",
                        padding: "0.5rem 1rem",
                        borderRadius: "6px",
                        border: "none",
                        background: "#e2e8f0",
                        cursor: "pointer"
                    }}
                >
                    ← Retour
                </button>
                
                <h1>{material.name}</h1>
                
                {material.supplier && (
                    <div className="material-supplier">
                        <h3>Fournisseur</h3>
                        <p><strong>{material.supplier.name}</strong></p>
                    </div>
                )}

                {material.productsMaterials && material.productsMaterials.length > 0 && (
                    <div className="material-products">
                        <h3>Utilisé dans {material.productsMaterials.length} produit(s)</h3>
                        <ul>
                            {material.productsMaterials.map((productMaterial, index) => (
                                <li key={index}>
                                    {productMaterial.product ? productMaterial.product.name : 'Produit inconnu'}
                                    {productMaterial.quantity && (
                                        <span> - Quantité: {productMaterial.quantity}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="material-details">
                    <h3>Détails</h3>
                    {material.description && <p><strong>Description:</strong> {material.description}</p>}
                </div>
            </div>
        </div>
    );
}