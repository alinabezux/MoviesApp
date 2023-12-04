import axios from "axios";
import token from "../api/token";

const baseURL = 'https://api.themoviedb.org/3/';

const axiosService = axios.create({baseURL});
axiosService.interceptors.request.use((config) => {
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default axiosService;
