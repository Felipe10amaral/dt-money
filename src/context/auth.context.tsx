import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, FC, PropsWithChildren, useContext, useState } from "react";
import * as authService from "@/services/AuthServices"
import { LoginFormParams } from "@/Components/LoginForm";
import { FormRegisterParams } from "@/Components/RegisterForm";
import { IUser } from "@/interface/IUserInterface";
import { IAuthenticateResponse } from "@/interface/https/IAuthenticateResponse";

type AuthContextType = {
    user: IUser | null
    token: string | null
    handleAuthenticate: (params: LoginFormParams) => Promise<void>
    handleRegister: (params: FormRegisterParams) => Promise<void>
    handleLogout: () => void
    restoreUserSession: () => Promise<string | null>
}

export const AuthContext = createContext<AuthContextType>( {} as AuthContextType)

export const AuthContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [user, setUser] = useState<IUser | null>(null)
    const [token, setToken] = useState<string | null>(null)

    const handleAuthenticate = async ( userData : LoginFormParams) => {
        const {token, user} = await authService.authenticate(userData)

        await AsyncStorage.setItem("dt-money-user", JSON.stringify({user, token}))

        setToken(token)
        setUser(user)
    }

    const handleRegister = async (formData: FormRegisterParams) => {
        const {token, user} = await authService.registerUser(formData)

        await AsyncStorage.setItem("dt-money-user", JSON.stringify({user, token}))

        setToken(token)
        setUser(user)
    }

    const handleLogout = () => {}

    const restoreUserSession = async () => {
        const userData = await AsyncStorage.getItem("dt-money-user")
        if(userData) {
            const {token, user} = JSON.parse(userData) as IAuthenticateResponse
            setToken(token)
            setUser(user)
        }
        return userData
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                handleAuthenticate,
                handleLogout,
                handleRegister,
                restoreUserSession
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    return context
}