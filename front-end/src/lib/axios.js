import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials:true, // for sending cookies in every single request 
})