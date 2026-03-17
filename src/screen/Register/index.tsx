import { AuthHeader } from "@/Components/AuthHeader"
import { DismissKeyboardView } from "@/Components/DismissKeyboardView"
import { RegisterForm } from "@/Components/RegisterForm"
import { Text, View } from "react-native"

export const Register = () => {
    return (
        <DismissKeyboardView>
            <View className="flex-1 w-[82%] self-center">
                <AuthHeader />
                <RegisterForm />
            </View>
        </DismissKeyboardView>
    )
}