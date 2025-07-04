import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUser } from "../../api/userApi";

export default function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        if (password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }
        try {
            const { ok, data } = await createUser({ email, name, password, confirmPassword });
            if (ok) {
                setSuccess("Inscription réussie !");
                setTimeout(() => navigate("/login"), 1000);
            } else {
                if (data && data.message) {
                    setError(data.message);
                } else if (typeof data === "string") {
                    setError(data);
                } else {
                    setError("Erreur inconnue");
                }
            }
        } catch (err) {
            setError(err.message || "Erreur réseau");
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
                <input
                    type="password"
                    placeholder="Confirmer le mot de passe"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">S'inscrire</button>
            </form>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <p style={{ marginTop: "1rem", textAlign: "center" }}>
                Déjà un compte ?{" "}
                <Link to="/login" className="register-link">
                    Se connecter
                </Link>
            </p>
        </div>
    );
}