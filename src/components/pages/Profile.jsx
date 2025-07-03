import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../store/authStore.js";

export default function Profile() {
    const navigate = useNavigate();
    const user = authStore((state) => state.user);
    
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    // Initialiser les valeurs avec les données de l'utilisateur connecté
    useEffect(() => {
        if (user) {
            setEmail(user.email || "");
            setName(user.name || "");
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!user) {
            setError("Utilisateur non connecté");
            return;
        }

        try {
            // Ici, tu pourrais faire un appel API pour mettre à jour le profil
            // await updateUserProfile(user.id, { email, name });
            
            // Pour l'instant, on simule la mise à jour
            setSuccess("Profil mis à jour !");
            setTimeout(() => setSuccess(""), 2000);
        } catch (err) {
            setError("Erreur lors de la mise à jour");
            setTimeout(() => setError(""), 3000);
        }
    };

    // Rediriger si l'utilisateur n'est pas connecté
    if (!user) {
        return (
            <div className="auth-page">
                <h2>Accès refusé</h2>
                <p>Vous devez être connecté pour accéder à votre profil.</p>
                <button onClick={() => navigate("/login")}>Se connecter</button>
            </div>
        );
    }

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
                
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
            </form>
        </div>
    );
}