import axios from "axios"
import Config from "../config/Config";

const API = axios.create({
    baseURL: Config.API_BASE,
    responseType: "json"
})

API.interceptors.request.use(config => {
        if (!config.headers.Authorization) {
            const token = JSON.parse(localStorage.getItem("token"));

            if (token) {
                config.headers.Authorization = `Bearer ${token.accessToken}`
            }
        }
        return config;
    },
    error => Promise.reject(error)
)

API.interceptors.response.use(response => {
        return response
    },
    error => {
        console.log(error.response)
        if (error.response && error.response.status === 403) {
            //history.push("/login")
            return Promise.reject(error)
        } else {
            return Promise.reject(error)
        }
    }
)
export default API;