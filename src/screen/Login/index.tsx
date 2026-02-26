import { DismissKeyboardView } from '@/Components/DismissKeyboardView'
import { PublicStackParamList } from '@/routes/PublicRoutes'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {View, Text, TouchableOpacity} from 'react-native'

export const Login = () => {
    const navigation = useNavigation<StackNavigationProp<PublicStackParamList>>()

    return (
        <DismissKeyboardView>
            <Text>Login</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>Registrar</Text>
            </TouchableOpacity>
        </DismissKeyboardView>
    )
}