const apiUrl = "http://localhost:8080/api/v1/presupuestos/"

import axios from "axios";

export const api = axios.create({
    baseURL: apiUrl,
    withCredentials: true
})

export const login = async (username, password) => {
    try {
        const res = await api.post("auth/login", {username, password});
        console.log(res.data);
        return true
    } catch (err) {
        console.error(err.response?.data || err.message);
    }
    return false
}

export const logout = async () => {
    try {
        const res = await api.post("auth/logout");
        console.log(res.data);
    } catch (err) {
        console.error(err.response?.data || err.message);
    }
}

export const getBudget = async () => {
    try {
        const res = await api.get("budget/get/1");
        console.log(res.data);
    } catch (err) {
        console.error(err.response?.data || err.message);
    }
}

export const getClientById = async (clientId, setter) => {
    try {
        const res = await api.get("client/get/" + clientId);
        setter(res.data)
    } catch (err) {
        console.error(err.response?.data || err.message);
    }
}

export const getClientNameById = async (clientId) => {
    try {
        const res = await api.get("client/get/" + clientId);
        return res.data.name
    } catch (err) {
        console.error(err.response?.data || err.message);
    }
}

export const saveBudget = async (budgetData) => {
    try {  
        return api.post("budget/create", budgetData);   
    } catch (err) {
        console.error(err.response?.data || err.message);
    }
}

export const formatRow = (row) => {
    return {
        description: row.detail,
        quantity: row.quantity,
        salePrice: row.price
    }
}

export const formatBudgetItem = (item, index) => {
    return {
        id: index,
        detail: item.description,
        quantity: item.quantity,
        price: item.salePrice,
        total: item.quantity * item.salePrice,
        filled: true
    };
}