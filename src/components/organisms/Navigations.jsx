import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { authStore } from "../../store/authStore.js";
import { fetchUserById } from "../../api/userApi.js";
import Avatar from "react-nice-avatar";

const Navigations = () => {
    const user = authStore((state) => state.user);

    const [categories, setCategories] = useState([]);
    const [data, setData] = useState({});

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
                    {Object.entries(categories).map(([key, cat]) => (
                        <Link to={`/products/${cat.id}`} className="block-link" key={key}>
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
        </div>
    );
};

export default Navigations;