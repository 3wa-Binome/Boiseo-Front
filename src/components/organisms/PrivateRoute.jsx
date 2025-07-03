import { Navigate } from "react-router-dom";
import { authStore } from "../../store/authStore.js";

export default function PrivateRoute({ children }) {
    const isAuth = authStore(state => state.isAuthenticated);
    const isLoading = authStore(state => state.isLoading);

    if (isLoading) {
        return <div>Chargement...</div>;
    }
    return isAuth ? children : <Navigate to="/login" replace />;
}