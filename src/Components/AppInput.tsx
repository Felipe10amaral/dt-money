//@ts-ignore
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/shared/colors';
import { FieldValues, Path, Control, Controller } from "react-hook-form";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { useRef, useState } from 'react';
import clsx from 'clsx';

interface AppInputParams<T extends FieldValues> extends TextInputProps {
    control: Control<T>;
    name: Path<T>;
    leftIcon?: keyof typeof MaterialIcons.glyphMap;
    label?: string;
}

export const AppInput = <T extends FieldValues>({name, leftIcon, label, control, secureTextEntry, ...rest}: AppInputParams<T>)  => {
    const inputRef = useRef<TextInput>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [showPassword, setIsPassword] = useState(secureTextEntry)
    
    const checkFocus = () => {
        if( inputRef.current) {
            setIsFocused(inputRef.current.isFocused())
        }
    }

    return (
        <Controller 
            control={control}
            name={name}
            render={ ({field: {value, onChange } }) => { return (
                <View className='w-full mt-4'>
                    { label && <Text className={clsx("mb-2 mt-3 text-base", isFocused ? "text-accent-brand" : "text-gray-600")} >{label}</Text> }

                    <TouchableOpacity className='flex-row items-center justify-between border-b-[1px] border-gray-600 px-3 py-2 h-16'>
                        {leftIcon && 
                            <MaterialIcons 
                                name={leftIcon} 
                                color={isFocused ? colors["accent-brand"] : colors.gray["600"]} 
                                size={24}
                                className='mr-2'
                            />}
                        <TextInput 
                            value={value} 
                            onChange={onChange} 
                            {...rest} 
                            placeholderTextColor={colors.gray["700"]} 
                            className='flex-1 text-base text-gray-500'
                            ref={inputRef}
                            onFocus={checkFocus}
                            onEndEditing={checkFocus}
                            secureTextEntry={showPassword}
                        />

                        {
                            secureTextEntry && (
                                <TouchableOpacity onPress={() => setIsPassword((value) => !value)}>
                                    <MaterialIcons 
                                        name={ showPassword ? "visibility" : "visibility-off" }
                                        color={colors.gray["600"]}
                                        size={24}
                                    />
                                </TouchableOpacity>
                            )
                        }
                    </TouchableOpacity>
                </View>
            )}}
        />
    )

}