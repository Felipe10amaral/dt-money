import { dtMoneyAPI } from "@/api/dt-money";
import { LoginFormParams } from "@/Components/LoginForm";
import { IAuthenticateResponse } from "@/interface/https/IAuthenticateResponse";
import { FormRegisterParams } from '@/Components/RegisterForm'

export const authenticate = async (userData: LoginFormParams): Promise<IAuthenticateResponse> => {
    const { data } = await dtMoneyAPI.post<IAuthenticateResponse>("/auth/login", userData)
    return data
}

export const registerUser = async (userData: FormRegisterParams): Promise<IAuthenticateResponse> => {
    const { data } = await dtMoneyAPI.post<IAuthenticateResponse>("/auth/register", userData)
    return data
}