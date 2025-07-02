import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();

    // Récupération des infos depuis le localStorage (à adapter selon ton backend)
    const [email, setEmail] = useState(localStorage.getItem("user_email") || "");
    const [name, setName] = useState(localStorage.getItem("user_name") || "");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici, tu pourrais faire un appel API pour mettre à jour le profil
        try {
            localStorage.setItem("user_email", email);
            localStorage.setItem("user_name", name);
            // Le mot de passe ne devrait pas être stocké en clair dans le localStorage !
            setSuccess("Profil mis à jour !");
            setTimeout(() => setSuccess(""), 2000);
        } catch (err) {
            setError("Erreur lors de la mise à jour");
        }
    };

    return (
        <div className="auth-page">
            <h2>Mon profil</h2>
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
                <button type="submit">Enregistrer</button>
                <button type="button" onClick={() => navigate("/logout")}>Se déconnecter</button>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
            </form>
        </div>
    );
}