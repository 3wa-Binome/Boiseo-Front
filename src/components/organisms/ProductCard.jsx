import ProductImage from "../atoms/ProductImage";
import ProductInfoGraph from "../molecules/ProductInfoGraph";

export default function ProductCard({ title, image, materials = [] }) {
    return (
        <div className="product-card">
            <ProductImage src={image} alt={title} />
            <h3 className="product-title">{title}</h3>
            {materials.length > 0 && (
                <div className="product-percent-graph">
                    <ProductInfoGraph materials={materials} />
                </div>
            )}
        </div>
    );
}