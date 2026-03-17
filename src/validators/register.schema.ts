import * as yup from 'yup';

export const registerSchema = yup.object({
    email: yup.string().email("Digite um email válido").required("O email é obrigatório"),
    password: yup.string().min(6, "A senha deve conter no mínimo 6 caracteres").required("A senha é obrigatória"),
    name: yup.string().required("O nome é obrigatório"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não coincidem")
    .required("A confirmação de senha é obrigatória"),
})