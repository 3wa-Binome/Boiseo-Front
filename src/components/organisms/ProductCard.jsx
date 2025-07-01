import ProductImage from "../atoms/ProductImage";
import ProductInfoGraph from "../molecules/ProductInfoGraph";

export default function ProductCard({ title, image, materials = [] }) {
    const percentMaterials = Array.isArray(materials)
        ? materials.filter(mat => typeof mat === "object" && mat.name && mat.percent !== undefined)
        : [];

    return (
        <div className="product-card">
            <ProductImage src={image} alt={title} />
            <h3 className="product-title">{title}</h3>
            {percentMaterials.length > 0 && (
                <div className="product-percent-graph">
                    <ProductInfoGraph materials={percentMaterials} />
                </div>
            )}
        </div>
    );
}