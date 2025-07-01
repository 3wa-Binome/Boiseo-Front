import { useParams, useNavigate } from "react-router-dom";
import { materialsData } from "../../data/productsData.js";

export default function Materials() {
    const { materialName } = useParams();
    const navigate = useNavigate();

    // Trouver un matériau unique
    const material = materialsData.find(
        (mat) => mat.name.toLowerCase() === materialName.toLowerCase()
    );

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
                <p>{material.description}</p>
            </div>
        </div>
    );
}