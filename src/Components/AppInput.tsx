//@ts-ignore
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/shared/colors';
import { FieldValues, Path, Control, Controller } from "react-hook-form";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";

interface AppInputParams<T extends FieldValues> extends TextInputProps {
    control: Control<T>;
    name: Path<T>;
    leftIcon?: keyof typeof MaterialIcons.glyphMap;
    label?: string;
}

export const AppInput = <T extends FieldValues>({name, leftIcon, label, control, ...rest}: AppInputParams<T>)  => {
    return (
        <Controller 
            control={control}
            name={name}
            render={ ({field: {value, onChange } }) => { return (
                <View className='w-full'>
                    { label && <Text className='text-white'>{label}</Text> }

                    <TouchableOpacity className='flex-row items-center justify-between border-b-[1px] border-gray-600 px-3 py-2 h-16'>
                        <TextInput 
                            value={value} 
                            onChange={onChange} 
                            {...rest} 
                            placeholderTextColor={colors.gray["700"]} 
                        />
                    </TouchableOpacity>
                </View>
            )}}
        />
    )

}