import { Platform } from "react-native";
import axios from "axios";
import { AppError } from "@/Errors/AppError";

const baseURL = Platform.select({
    ios: "http://localhost:3001",
    android: "http://10.0.2.2:3001"
})

export const dtMoneyAPI = axios.create({
    baseURL
})

dtMoneyAPI.interceptors.response.use(
    (config) => config,
    (error) => {
        if(error.response && error.response.data) {
            return Promise.reject( new AppError(error.response.data.message))
        }
        else {
            return Promise.reject( new AppError("Ocorreu um erro inesperado.")) 
        }
    }
)