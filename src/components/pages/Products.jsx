import { useParams } from "react-router-dom";
import productsData from "../../data/productsData.js";
import ProductCard from "../organisms/ProductCard";

export default function Products() {
    const { type } = useParams();
    const category = productsData.categories[type];

    if (!category) {
        return <p>Type de produit inconnu.</p>;
    }

    return (
        <div className="product-grid">
            {category.products.map((product, idx) => (
                <ProductCard
                    key={idx}
                    title={product.title}
                    image={product.image}
                    materials={product.materials}
                    percent={product.percent}
                />
            ))}
        </div>
    );
}