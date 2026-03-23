import { dtMoneyAPI } from "@/api/dt-money";
import { LoginFormParams } from "@/Components/LoginForm";
import { IAuthenticateResponse } from "@/interface/https/IAuthenticateResponse";

export const authenticate = async (userData: LoginFormParams): Promise<IAuthenticateResponse> => {
    const { data } = await dtMoneyAPI.post<IAuthenticateResponse>("/auth/login", userData)
    return data
}

export const registerUser = async (userData: LoginFormParams): Promise<IAuthenticateResponse> => {
    const { data } = await dtMoneyAPI.post<IAuthenticateResponse>("/auth/register", userData)
    return data
}