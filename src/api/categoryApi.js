import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

axios.defaults.withCredentials = true

export const fetchCategoriesByUser = async (user_id) => {
    try {
        if (user_id) {
            const response = await axios.get(`${API_URL}/categories/user/${user_id}`)
            const categories = response.data
            return categories
        } else {
            throw new Error("Erreur lors de la récupération de la catégorie")
        }
    } catch (err) {
        console.error("Erreur lors de la récupération de la catégorie :", err)
        throw new Error("Erreur lors de la récupération de la catégorie")
    }
}

export const fetchCategoryById = async (categorie_id) => {
    try {
        if (categorie_id) {
            const response = await axios.get(`${API_URL}/categories/${categorie_id}`)
            const category = response.data
            return category
        } else {
            throw new Error("Erreur lors de la récupération de la catégorie")
        }
    } catch (err) {
        console.error("Erreur lors de la récupération de la catégorie :", err)
        throw new Error("Erreur lors de la récupération de la catégorie")
    }
}

export const createCategory = async (categorieInformation) => {
    try {
        const response = await axios.post(`${API_URL}/categories`, categorieInformation)
        return response
    }
    catch (err) {
        throw new Error("L'utilisateur existe déjà")
    }
}

export const deleteCategory = async (categorie_id) => {
    try {
        const response = await axios.delete(`${API_URL}/categories/${categorie_id}`)
        console.log(response)
        return response
    }
    catch (err) {
        console.error("Erreur lors de la suppression de la catégorie:", err)
        return false;
    }
}

export const updateCategory = async (categorie) => {
    try {
        const response = await axios.put(`${API_URL}/categories/${categorie.id}`, categorie)
        console.log(response)
        return response
    }
    catch (err) {
        console.error("Erreur lors de la modification de la catégorie:", err)
        throw new Error("Erreur lors de la modification de la catégorie");
    }
}