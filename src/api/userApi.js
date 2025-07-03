import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

axios.defaults.withCredentials = true

export const fetchUserById = async (user_id) => {
    try {
        if (user_id) {
            const response = await axios.get(`${API_URL}/users/${user_id}`)
            const user = response.data
            return user.data
        } else {
            throw new Error("Erreur lors de la récupération de l'utilisateur")
        }
    } catch (err) {
        console.error("Erreur lors de la récupération de l'utilisateur :", err)
        throw new Error("Erreur lors de la récupération de l'utilisateur")
    }
}

export const createUser = async (userInformation) => {
    try {
        const response = await axios.post(`${API_URL}/users`, userInformation)
        return response
    }
    catch (err) {
        throw new Error("L'utilisateur existe déjà")
    }
}

export const deleteUser = async (user_id) => {
    try {
        const response = await axios.delete(`${API_URL}/users/${user_id}`)
        console.log(response)
        return response
    }
    catch (err) {
        console.error("Erreur lors de la suppression de l'utilisateur:", err)
        return false;
    }
}

export const updateUser = async (user) => {
    try {
        const response = await axios.put(`${API_URL}/users/${user.id}`, user)
        console.log(response)
        return response
    }
    catch (err) {
        console.error("Erreur lors de la modification de l'utilisateur:", err)
        throw new Error("Erreur lors de la modification de l'utilisateur");
    }
}

export const loginAPI = async (email, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data.data;
};

export const logoutAPI = async () => {
    const response = await axios.get(`${API_URL}/auth/logout`)
    console.log(response)
    return response;
};

export const checkAuth = async () => {
        const response = await axios.get(`${API_URL}/auth/me`)
        console.log(response)
        const user = response.data.data
        return user;
}