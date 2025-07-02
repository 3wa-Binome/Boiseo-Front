import { Link } from "react-router-dom";
import products from "../../data/productsData.js";
import Avatar from "react-nice-avatar";

const user = {
    name: "Bastien",
    email: "alice@mail.com",
};

const Navigations = () => {
    return (
        <div>
            <div className="navigations">
                <h1 className="title"># Boiséo</h1>
                <div className="profile">
                    <Avatar style={{ width: 56, height: 56 }} sex="man" />
                    <div className="profile-info">
                        <h2>Bonjour, {user.name}</h2>
                        <p>Bienvenue sur votre tableau de bord</p>
                    </div>
                </div>
                <div className="cards-grid">
                    {Object.entries(products.categories).map(([key, cat]) => (
                        <Link to={`/products/${key}`} className="block-link" key={key}>
                            <div className="category-card">
                                <div className="card-text">
                                    <h2>{cat.title}</h2>
                                    <p>{cat.quantity} produits</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navigations;