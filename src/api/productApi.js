import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

axios.defaults.withCredentials = true

export const fetchProductsByCategory = async (category_id) => {
    try {
        if (category_id) {
            const response = await axios.get(`${API_URL}/products/category/${category_id}`)
            const products = response.data
            return products
        } else {
            throw new Error("Erreur lors de la récupération du produit")
        }
    } catch (err) {
        console.error("Erreur lors de la récupération du produit :", err)
        throw new Error("Erreur lors de la récupération du produit")
    }
}

export const fetchProductsByUser = async (user_id) => {
    try {
        if (user_id) {
            const response = await axios.get(`${API_URL}/products/user/${user_id}`)
            const products = response.data
            return products
        } else {
            throw new Error("Erreur lors de la récupération du produit")
        }
    } catch (err) {
        console.error("Erreur lors de la récupération du produit :", err)
        throw new Error("Erreur lors de la récupération du produit")
    }
}

export const fetchProductById = async (product_id) => {
    try {
        if (product_id) {
            const response = await axios.get(`${API_URL}/products/${product_id}`)
            const product = response.data
            return product
        } else {
            throw new Error("Erreur lors de la récupération du produit")
        }
    } catch (err) {
        console.error("Erreur lors de la récupération du produit :", err)
        throw new Error("Erreur lors de la récupération du produit")
    }
}

export const createProduct = async (productInformation) => {
    try {
        const response = await axios.post(`${API_URL}/products`, productInformation)
        return response
    }
    catch (err) {
        throw new Error("L'utilisateur existe déjà")
    }
}

export const deleteProduct = async (product_id) => {
    try {
        const response = await axios.delete(`${API_URL}/products/${product_id}`)
        console.log(response)
        return response
    }
    catch (err) {
        console.error("Erreur lors de la suppression du produit:", err)
        return false;
    }
}

export const updateProduct = async (product) => {
    try {
        const response = await axios.put(`${API_URL}/products/${product.id}`, product)
        console.log(response)
        return response
    }
    catch (err) {
        console.error("Erreur lors de la modification du produit:", err)
        throw new Error("Erreur lors de la modification du produit");
    }
}

export const addMadeProduct = async (product_id, quantity) => {
    try {
        const response = await axios.put(`${API_URL}/products/add/${product_id}`, {quantity})
        console.log(response)
        return response
    }
    catch (err) {
        console.error("Erreur lors de la modification du produit:", err)
        throw new Error("Erreur lors de la modification du produit");
    }
}

export const removeMadeProduct = async (product_id, quantity) => {
    try {
        const response = await axios.put(`${API_URL}/products/remove/${product_id}`, {quantity})
        console.log(response)
        return response
    }
    catch (err) {
        console.error("Erreur lors de la modification du produit:", err)
        throw new Error("Erreur lors de la modification du produit");
    }
}