import { AppHeader } from "@/Components/AppHeader"
import { useAuthContext } from "@/context/auth.context"
import { useTransactionsContext } from "@/context/Transactions.context"
import { useErrorHandler } from "@/shared/hooks/useErrorHandler"
import { useEffect } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export const Home = () => {
    const {handleLogout} = useAuthContext()
    const {fetchCategories} = useTransactionsContext()
    const {handleError} = useErrorHandler()

    const handleFetchCategories = async () => {
            try {
                await fetchCategories()
            } catch (error) {
                handleError(error, "Erro ao buscar categorias")
            }
        }

    useEffect( () => {
        (async () => {})
    }, [])
    
    return (
        <SafeAreaView className="flex-1 bg-background-primary">
            <AppHeader />
        </SafeAreaView>
    )
}