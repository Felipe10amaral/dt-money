import { useKeyboardView } from "@/shared/hooks/useKeyboardView"
import { Image, View } from "react-native"

export const AuthHeader = () => {
    const keuboardVisible = useKeyboardView()

    if (keuboardVisible) {
        return <></>
    }
    return (
        <View className="items-center justify-center w-full min-h-40">
            <Image source={require("@/assets/Logo.png")} className="h-[48px] w-[255px]" />
        </View>
    )
}