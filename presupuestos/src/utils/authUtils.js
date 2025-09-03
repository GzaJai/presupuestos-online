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
    } catch (err) {
        console.error(err.response?.data || err.message);
        
    }
}

