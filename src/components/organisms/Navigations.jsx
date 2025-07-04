import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { authStore } from "../../store/authStore.js";
import { fetchUserById } from "../../api/userApi.js";
import Avatar from "react-nice-avatar";

const Navigations = () => {
    const user = authStore((state) => state.user);
    const [categories, setCategories] = useState([]);
    const [data, setData] = useState({});
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const datas = await fetchUserById(user.id);
            setData(datas);
            setCategories(datas.categories);
        };
        fetchData().catch(console.error);
    }, [user?.id]);

    if (!data) {
        return <div>Chargement...</div>;
    }

    // Fermer le menu au clic sur un lien (optionnel)
    const handleLinkClick = () => setOpen(false);

    return (
        <>
            {/* Bouton hamburger visible sur mobile */}
            <button
                className="hamburger"
                aria-label="Ouvrir le menu"
                onClick={() => setOpen(!open)}
            >
                <span />
                <span />
                <span />
            </button>
            <div className={`navigations${open ? " open" : ""}`}>
                <h1 className="title"># Boiséo</h1>
                <div className="profile">
                    <Avatar style={{ width: 56, height: 56 }} sex="man" />
                    <div className="profile-info">
                        <h2>Bonjour, {user.name}</h2>
                        <p>Bienvenue sur votre tableau de bord</p>
                    </div>
                </div>
                <div className="cards-grid">
                    {Object.entries(categories).map(([key, cat]) => (
                        <Link
                            to={`/products/${cat.id}`}
                            className="block-link"
                            key={key}
                            onClick={handleLinkClick}
                        >
                            <div className="category-card">
                                <div className="card-text">
                                    <h2>{cat.name}</h2>
                                    <p>{cat.productCount} produits</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            {/* Overlay pour fermer le menu en cliquant à côté */}
            {open && <div className="sidebar-overlay" onClick={() => setOpen(false)} />}
        </>
    );
};

export default Navigations;