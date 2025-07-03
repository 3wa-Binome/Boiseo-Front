import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

axios.defaults.withCredentials = true

export const fetchSuppliersByUser = async (user_id) => {
    try {
        if (user_id) {
            const response = await axios.get(`${API_URL}/suppliers/user/${user_id}`)
            const suppliers = response.data
            return suppliers
        } else {
            throw new Error("Erreur lors de la récupération du fournisseur")
        }
    } catch (err) {
        console.error("Erreur lors de la récupération du fournisseur :", err)
        throw new Error("Erreur lors de la récupération du fournisseur")
    }
}

export const fetchSupplierById = async (supplier_id) => {
    try {
        if (supplier_id) {
            const response = await axios.get(`${API_URL}/suppliers/${supplier_id}`)
            const supplier = response.data
            return supplier
        } else {
            throw new Error("Erreur lors de la récupération du fournisseur")
        }
    } catch (err) {
        console.error("Erreur lors de la récupération du fournisseur :", err)
        throw new Error("Erreur lors de la récupération du fournisseur")
    }
}

export const createSupplier = async (supplierInformation) => {
    try {
        const response = await axios.post(`${API_URL}/suppliers`, supplierInformation)
        return response
    }
    catch (err) {
        throw new Error("L'utilisateur existe déjà")
    }
}

export const deleteSupplier = async (supplier_id) => {
    try {
        const response = await axios.delete(`${API_URL}/suppliers/${supplier_id}`)
        console.log(response)
        return response
    }
    catch (err) {
        console.error("Erreur lors de la suppression du fournisseur:", err)
        return false;
    }
}

export const updateSupplier = async (supplier) => {
    try {
        const response = await axios.put(`${API_URL}/suppliers/${supplier.id}`, supplier)
        console.log(response)
        return response
    }
    catch (err) {
        console.error("Erreur lors de la modification du fournisseur:", err)
        throw new Error("Erreur lors de la modification du fournisseur");
    }
}