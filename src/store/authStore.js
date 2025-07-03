import { create } from 'zustand'
import { checkAuth, loginAPI, logoutAPI } from '../api/userApi';

export const useAuthStore = create<IAuthState>((set) => ({
    user: null,
    isAuthenticated : false,
    // Connexion
    login: async (email, password) => {
        try {
            const user = await loginAPI(email, password);
            set({ user, isAuthenticated: true });
        } catch (error) {
            console.error("Erreur de connexion: ", error);
            throw error.message;
        }
    },
    // Déconnexion
    logout: () => {
		try {
			logoutAPI();
			set({ user: null, isAuthenticated: false });
		} catch (error) {
            console.error("Erreur lors de la déconnexion: ", error);
            throw new Error(error.message);
		}

    },
    // Inscription
    register: async (name, email, password) => {
        try {
            const newUser = { name, email, password };
            await createUser(newUser);
        } catch (error) {
            console.error("Erreur lors de l'inscription: ", error);
            throw new Error(error.message);
        }
    },
	checkAuth: async () => {
		try {
			const user = await checkAuth()
			set({ user, isAuthenticated: true });
		} catch (error) {
			console.error("Erreur lors de la vérification de connexion: ", error);
			set({ user: null, isAuthenticated: false })
            throw new Error(error.message);
		}
	}
}))
