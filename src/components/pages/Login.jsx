import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authStore } from "../../store/authStore.js";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const login = authStore(state => state.login);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(email, password);
            navigate("/");
        } catch (error) {
            console.error("Erreur de connexion: ", error);
            if (error.response && error.response.data) {
                // Affiche la chaîne directement si c’en est une
                if (typeof error.response.data === "string") {
                    setError(error.response.data);
                } else if (error.response.data.message) {
                    setError(error.response.data.message);
                } else {
                    setError(JSON.stringify(error.response.data));
                }
            } else if (error.message) {
                setError(error.message);
            } else {
                setError("Erreur de connexion, veuillez réessayer plus tard.");
            }
        }
    };

    return (
        <div className="auth-page">
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Se connecter</button>
            </form>
            {error && <p className="error">{error}</p>}
            <p style={{ marginTop: "1rem", textAlign: "center" }}>
                Pas encore de compte ?{" "}
                <Link to="/register" className="register-link">
                    S'inscrire
                </Link>
            </p>
        </div>
    );
}