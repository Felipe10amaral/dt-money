import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { AppInput } from './AppInput'
import { AppButton } from './AppButton'
import { View, Text } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { PublicStackParamList } from '@/routes/PublicRoutes'
import { loginSchema } from '@/validators/login.screen'

export interface LoginFormParams {
    email: string
    password: string    
}

export const LoginForm = () => {
    const {control, handleSubmit, formState: {isSubmitting}} = useForm<LoginFormParams>(
        {
            defaultValues: {
                email: "",
                password: ""
            },
            resolver: yupResolver(loginSchema)
        }
    )

    const onSubmit = async () => {}

    const navigation = useNavigation<NavigationProp<PublicStackParamList>>()

    return (
        <>
            <AppInput 
                control={control}
                name='email'
                label='email'
                placeholder='mail@email.com'
                leftIcon="mail-outline"
            />
            <AppInput 
                control={control}
                name='password'
                label='Senha'
                placeholder='senha'
                leftIcon="lock-outline"
                secureTextEntry
                
            />

            <View className='flex-1 justify-between mt-8 mb-6 min-h-[250px]'>
                <AppButton onPress={handleSubmit(onSubmit)} iconName="arrow-right"> Login </AppButton>
                <View>
                    <Text className='mb-6 text-gray-300 text-base'> Ainda não possui uma conta? </Text>
                    <AppButton onPress={() => navigation.navigate("Register")} iconName="arrow-right" mode='outline'> Cadastrar </AppButton>
                </View>
            </View>
        </>
    )
}