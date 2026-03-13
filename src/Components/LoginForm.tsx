import {useForm} from 'react-hook-form'
import { AppInput } from './AppInput'

export interface LoginFormParams {
    email: string
    password: string    
}

export const LoginForm = () => {
    const {control, handleSubmit, formState: {isSubmitting}} = useForm<LoginFormParams>()

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
        </>
    )
}