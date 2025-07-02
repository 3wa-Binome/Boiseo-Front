import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simule une authentification
        if (email === "test@mail.com" && password === "password") {
            localStorage.setItem("auth", "true");
            localStorage.setItem("user_email", email);
            localStorage.setItem("user_name", "Test User");
            navigate("/");
        } else {
            setError("Identifiants invalides");
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
                {error && <p className="error">{error}</p>}
            </form>
            <p style={{ marginTop: "1rem", textAlign: "center" }}>
                Pas encore de compte ?{" "}
                <Link to="/register" className="register-link">
                    S'inscrire
                </Link>
            </p>
        </div>
    );
}