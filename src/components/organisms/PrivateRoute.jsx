import { Navigate } from "react-router-dom";
import { authStore } from "../../store/authStore.js";

export default function PrivateRoute({ children }) {
    const isAuth = authStore(state => state.isAuthenticated);
    const isLoading = authStore(state => state.isLoading);

    if (isLoading) {
        return <div className="auth-page loader">Chargement... Démarrage du serveur</div>;
    }
    return isAuth ? children : <Navigate to="/login" replace />;
}