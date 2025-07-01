import shelfSvg from '../../assets/shelf-svgrepo-com.svg';
import cabinetSvg from '../../assets/cabinet-svgrepo-com.svg';
import { Link } from "react-router-dom";
import products from "../../data/productsData.js";

const Navigations = () => {
    return (
        <div>
            <div className="navigations">
            <h1 className="title"># Boiséo</h1>
                <div className="profile">
                    <div className="profile-picture">
                        <img src="https://avatars.githubusercontent.com/u/12345678?v=4" alt="Profile" />
                    </div>
                    <div className="profile-info">
                        <h2>Bonjour, John Doe</h2>
                        <p>Bienvenue sur votre tableau de bord</p>
                    </div>

                </div>
                <div className="cards-grid">
                    <Link to="/cabinet" className="block-link">
                        <div className="category-card">
                            <img src={cabinetSvg} alt="Armoire" />
                            <div className="card-text">
                                <h2>Armoires</h2>
                                <p>{products.cabinetQuantity} produits</p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/shelf" className="block-link">
                        <div className="category-card">
                            <img src={shelfSvg} alt="Étagère" />
                            <div className="card-text">
                                <h2>Étagères</h2>
                                <p>{products.shelfQuantity} produits</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navigations;
