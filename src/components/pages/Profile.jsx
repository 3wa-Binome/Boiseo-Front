import { useState, useEffect } from "react";
import { resolvePath, useNavigate } from "react-router-dom";
import { authStore } from "../../store/authStore.js";
import { fetchUserById, updateUser } from "../../api/userApi.js";

export default function Profile() {
    const navigate = useNavigate();
    const user = authStore((state) => state.user);
    
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const checkAuth = authStore(state => state.checkAuth)

    // Initialiser les valeurs avec les données de l'utilisateur connecté
    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetchUserById(user.id)
            console.log("response fetchUserById", response)
            setEmail(response.email)
            setName(response.name)
        }

        fetchUser()
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!user) {
            setError("Utilisateur non connecté");
            return;
        }

        try {
            if(password) {
                await updateUser({ id: user.id, email, name, password, confirmPassword });
            } else {
                await updateUser({ id: user.id, email, name });
            }
            
            setSuccess("Profil mis à jour !");
            await checkAuth()
            setTimeout(() => setSuccess(""), 2000);
        } catch (err) {
            setError("Erreur lors de la mise à jour");
            setTimeout(() => setError(""), 3000);
        }
    };

    return (
        <div className="auth-page">
            <h2>Modifier mon profil</h2>
            
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
                    placeholder="Nouveau mot de passe"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    type="confirmPassword"
                    placeholder="Confirmer le nouveau mot de passe"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <button type="submit">Modifier</button>
                
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
            </form>
        </div>
    );
}