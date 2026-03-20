import { LoginFormParams } from "@/Components/LoginForm";
import { FormRegisterParams } from "@/Components/RegisterForm";
import { createContext, FC, PropsWithChildren, useContext, useState } from "react";

type AuthContextType = {
    user: null
    token: string | null
    handleAuthenticate: (params: LoginFormParams) => Promise<void>
    handleRegister: (params: FormRegisterParams) => Promise<void>
    handleLogout: () => void
}

export const AuthContext = createContext<AuthContextType>( {} as AuthContextType)

export const AuthContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)

    const handleAuthenticate = async ({ email, password}: LoginFormParams) => {}

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