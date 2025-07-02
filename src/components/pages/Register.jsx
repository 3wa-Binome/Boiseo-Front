import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, name, password }),
            });
            if (res.ok) {
                setSuccess("Inscription réussie !");
                setTimeout(() => navigate("/login"), 1000);
            } else {
                const data = await res.json();
                setError(data.message || "Erreur lors de l'inscription");
            }
        } catch (err) {
            setError("Erreur réseau");
        }
    };

    return (
        <div className="auth-page">
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Nom"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit">S'inscrire</button>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
            </form>
            <p style={{ marginTop: "1rem", textAlign: "center" }}>
                Déjà un compte ?{" "}
                <Link to="/login" className="register-link">
                    Se connecter
                </Link>
            </p>
        </div>
    );
}