import ProductCard from "../organisms/ProductCard";
import products from "../../data/productsData";

export default function Etageres() {
    return (
        <div className="product-grid">
            {products.allShelf.map((product, idx) => (
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