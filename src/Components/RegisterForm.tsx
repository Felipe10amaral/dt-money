import { useForm } from "react-hook-form";
import { AppInput } from "./AppInput";
import { AppButton } from "./AppButton";
import { View, Text } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { PublicStackParamList } from "@/routes/PublicRoutes";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/validators/register.schema";

export interface FormRegisterParams {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
}

export const RegisterForm = () => {
    const navigation = useNavigation<NavigationProp<PublicStackParamList>>()
    const {control, 
           handleSubmit,
           formState: {isSubmitting}  
    } = useForm<FormRegisterParams>({
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: ""
        },
        resolver: yupResolver(registerSchema)
    })

    const onSubmit = async () => {}

    return(
        <>
            <AppInput
                label="Nome"
                placeholder="Digite seu nome"
                control={control}
                name="name"
                leftIcon="person"
            />
            <AppInput
                label="E-mail"
                placeholder="Digite seu email"
                control={control}
                name="email"
                leftIcon="mail-outline"
            />
            <AppInput
                label="Senha"
                placeholder="Digite sua senha"
                control={control}
                name="password"
                leftIcon="lock-outline"
                secureTextEntry
            />
            <AppInput
                label="Confirme sua senha"
                placeholder="Digite sua senha"
                control={control}
                name="confirmPassword"
                leftIcon="lock-outline"
                secureTextEntry
            />

            <View className='flex-1 justify-between mt-8 mb-6 min-h-[250px]'>
                <AppButton onPress={handleSubmit(onSubmit)} iconName="arrow-right"> Cadastrar </AppButton>
                <View>
                    <Text className='mb-6 text-gray-300 text-base'> Já possui uma conta? </Text>
                    <AppButton onPress={() => navigation.navigate("Login")} iconName="arrow-right" mode='outline'> Acessar </AppButton>
                </View>
            </View>
        </>
    )
}