import { createContext, FC, PropsWithChildren, useContext, useState } from "react";
import * as authService from "@/services/AuthServices"
import { LoginFormParams } from "@/Components/LoginForm";
import { FormRegisterParams } from "@/Components/RegisterForm";
import { IUser } from "@/interface/IUserInterface";

type AuthContextType = {
    user: IUser | null
    token: string | null
    handleAuthenticate: (params: LoginFormParams) => Promise<void>
    handleRegister: (params: FormRegisterParams) => Promise<void>
    handleLogout: () => void
}

export const AuthContext = createContext<AuthContextType>( {} as AuthContextType)

export const AuthContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [user, setUser] = useState<IUser | null>(null)
    const [token, setToken] = useState<string | null>(null)

    const handleAuthenticate = async ( userData : LoginFormParams) => {
        const {token, user} = await authService.authenticate(userData)
        setToken(token)
        setUser(user)
    }

    const handleRegister = async (formData: FormRegisterParams) => {}

    const handleLogout = () => {}

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                handleAuthenticate,
                handleLogout,
                handleRegister
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