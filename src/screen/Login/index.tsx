import { DismissKeyboardView } from '@/Components/DismissKeyboardView'
import { LoginForm } from '@/Components/LoginForm'
import { PublicStackParamList } from '@/routes/PublicRoutes'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {View, Text, TouchableOpacity} from 'react-native'

export const Login = () => {
    const navigation = useNavigation<StackNavigationProp<PublicStackParamList>>()

    return (
        <DismissKeyboardView>
            <View className='flex-1 w[82%] self-center'>
                <LoginForm />
            </View>
        </DismissKeyboardView>
    )
}