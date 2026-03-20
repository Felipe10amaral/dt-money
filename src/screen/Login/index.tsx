import {View} from 'react-native'
import { AuthHeader } from '@/Components/AuthHeader'
import { DismissKeyboardView } from '@/Components/DismissKeyboardView'
import { LoginForm } from '@/Components/LoginForm'
import { useAuthContext } from '@/context/auth.context'

export const Login = () => {
    const {user} = useAuthContext()

    return (
        <DismissKeyboardView>
            <View className='flex-1 w-[82%] self-center'>
                <AuthHeader />
                <LoginForm />
            </View>
        </DismissKeyboardView>
    )
}