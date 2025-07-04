import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

axios.defaults.withCredentials = true

export const fetchMaterialsByUser = async (user_id) => {
    try {
        if (user_id) {
            const response = await axios.get(`${API_URL}/materials/user/${user_id}`)
            const materials = response.data
            return materials
        } else {
            throw new Error("Erreur lors de la récupération du materiaux")
        }
    } catch (err) {
        console.error("Erreur lors de la récupération du materiaux :", err)
        throw new Error("Erreur lors de la récupération du materiaux")
    }
}

export const fetchMaterialById = async (material_id) => {
    try {
        if (material_id) {
            const response = await axios.get(`${API_URL}/materials/${material_id}`)
            const material = response.data
            return material
        } else {
            throw new Error("Erreur lors de la récupération du materiaux")
        }
    } catch (err) {
        console.error("Erreur lors de la récupération du materiaux :", err)
        throw new Error("Erreur lors de la récupération du materiaux")
    }
}

export const createMaterial = async (materialInformation) => {
    try {
        const response = await axios.post(`${API_URL}/materials`, materialInformation);
        console.log("Réponse création matériel :", response.data);
        return response;
    }
    catch (err) {
        console.error("Erreur création matériel :", err.response?.data || err.message);
        throw new Error("Erreur lors de la création du matériel");
    }
}

export const deleteMaterial = async (material_id) => {
    try {
        const response = await axios.delete(`${API_URL}/materials/${material_id}`)
        console.log(response)
        return response
    }
    catch (err) {
        console.error("Erreur lors de la suppression du materiaux:", err)
        return false;
    }
}

export const updateMaterial = async (material) => {
    try {
        const response = await axios.put(`${API_URL}/materials/${material.id}`, material)
        console.log(response)
        return response
    }
    catch (err) {
        console.error("Erreur lors de la modification du materiaux:", err)
        throw new Error("Erreur lors de la modification du materiaux");
    }
}