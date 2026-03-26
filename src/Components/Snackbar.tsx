import { UseSnackbarContext } from "@/context/snackbar.context"
import { Text, View } from "react-native"

export const Snackbar = () => {
    const {message, type} = UseSnackbarContext()

    if(!message || !type) {
        return <></>
    }

    const bgColor = `${
        type === "Success"
         ? "bg-accent-brand-background-primary"
         : "bg-accent-red-background-primary"
    }`

    return (
        <View className={`absolute bottom-10 self-center w-[90%] rounded-xl justify-center z-10 ${bgColor}`}>
            <Text className="text-white text-base font-bold">{message} </Text>
        </View>
    )
}