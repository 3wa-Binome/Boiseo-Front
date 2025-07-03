import { create } from 'zustand'
import {checkAuth, createUser, loginAPI, logoutAPI} from '../api/userApi';

export const authStore = create((set) => ({
    user: null,
    isAuthenticated : false,
    isLoading: true,
    // Connexion
    login: async (email, password) => {
        try {
            const user = await loginAPI(email, password);
            set({ user, isAuthenticated: true });
        } catch (error) {
            throw error;
        }
    },
    // Déconnexion
    logout: async () => {
		try {
			await logoutAPI();
			set({ user: null, isAuthenticated: false });
		} catch (error) {
            throw error;
		}

    },
    // Inscription
    register: async (name, email, password) => {
        try {
            const newUser = { name, email, password };
            await createUser(newUser);
        } catch (error) {
            throw error;
        }
    },
	checkAuth: async () => {
		try {
			const user = await checkAuth()
			set({ user, isAuthenticated: true, isLoading: false });
		} catch (error) {
			set({ user: null, isAuthenticated: false, isLoading: false });
            throw error;
		}
	}
}))
