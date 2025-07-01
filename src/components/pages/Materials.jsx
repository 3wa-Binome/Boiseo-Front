import {useParams} from "react-router-dom";
import {materialsData} from "../../data/productsData.js";

export default function Materials() {
    const {materialName} = useParams();

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
                <h1 className="">{material.name}</h1>
                <p className="">{material.description}</p>
            </div>
        </div>
    );
}
