import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../store/authStore.js";

export default function Logout() {
    const navigate = useNavigate();
    const logout = authStore(state => state.logout);

    useEffect(() => {
        logout();
        navigate("/login");
    }, [logout, navigate]);
    return <p>Déconnexion...</p>;
}