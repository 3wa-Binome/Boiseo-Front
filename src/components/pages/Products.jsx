import { useParams } from "react-router-dom";
import ProductCard from "../organisms/ProductCard";
import { useState, useEffect } from "react";
import { fetchProductsByCategory } from "../../api/productApi";
import { Link } from "react-router-dom";

export default function Products() {
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetchProductsByCategory(id);
            if (response && response.data) {
                setProducts(response.data);
            }
            setIsLoading(false);
        };

        fetchProducts();
    }, [id]);

    if (isLoading) {
        return <p>Chargement des produits...</p>;
    }

    return (
        <div className="product-grid">
            <Link to={`/ajouter/product/produit/${id}`} className="add-btn">
                + Ajouter un produit
            </Link>
            {products.length === 0 ? (
                <p>Aucun produit trouvé pour cette catégorie.</p>
            ) : (
                products.map((product) => (
                    <ProductCard
                        key={`product-${product.id}`}
                        title={product.name}
                        image={product.pictures && product.pictures.length > 0 ? product.pictures[0] : null}
                        materials={product.productsMaterials}
                    />
                ))
            )}
        </div>
    );
}