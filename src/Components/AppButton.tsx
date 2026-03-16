//@ts-ignore
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/shared/colors';
import clsx from "clsx"
import { PropsWithChildren, FC } from "react"
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type AppButtonMode = 'fill' | 'outline'

interface AppButtonParams extends TouchableOpacityProps {
    //@ts-ignore
    iconName?: keyof typeof MaterialIcons.glyphMap
    mode?: AppButtonMode
}

export const AppButton: FC<PropsWithChildren<AppButtonParams>> = ( {children, mode = 'fill', iconName,...rest}) => {
    const isFill = mode === 'fill'
    
    return (
        <TouchableOpacity {...rest} className={clsx("w-full rounded-xl px-5 flex-row items-center h-button",
                                      iconName ? 'justify-between' : 'justify-center',
                                      {
                                        "bg-accent-brand": isFill,
                                        "bg-none border-[1px] border-accent-brand" : !isFill
                                      }
        )}>
            <Text 
                className={clsx("text-base", {
                    "text-white": isFill,
                    "text-accent-brand": !isFill
                })}
            >
                {children}
            </Text>

            {
                iconName && <MaterialIcons name={iconName} size={24} color={isFill ? colors.white : colors["accent-brand"]} /> 
            }
        </TouchableOpacity>
    )
}