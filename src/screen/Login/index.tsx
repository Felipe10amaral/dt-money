import {View} from 'react-native'
import { AuthHeader } from '@/Components/AuthHeader'
import { DismissKeyboardView } from '@/Components/DismissKeyboardView'
import { LoginForm } from '@/Components/LoginForm'

export type PublicStackParamList = {
    Login: undefined;
    Register: undefined;
}

export const Login = () => {

    return (
        <DismissKeyboardView>
            <View className='flex-1 w-[82%] self-center'>
                <AuthHeader />
                <LoginForm />
            </View>
        </DismissKeyboardView>
    )
}