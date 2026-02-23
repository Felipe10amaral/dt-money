import { PublicStackParamList } from '@/routes'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {View, Text, TouchableOpacity} from 'react-native'

export const Login = () => {
    const navigation = useNavigation<StackNavigationProp<PublicStackParamList>>()

    return (
        <View className='flex-1 items-center justify-center'>
            <Text>Login</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}