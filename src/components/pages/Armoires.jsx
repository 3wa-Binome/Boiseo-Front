import products from "../../data/productsData";
import ProductCard from "../organisms/ProductCard";

export default function Armoires() {
    return (
        <div>
            <div className="product-grid">
                {products.allCabinet.map((product, idx) => (
                    <ProductCard
                        key={idx}
                        title={product.title}
                        image={product.image}
                        materials={product.materials}
                        percent={product.percent}
                    />
                ))}
            </div>
        </div>
    );
}