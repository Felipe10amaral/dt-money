// @ts-ignore
import { MaterialIcons } from "@expo/vector-icons";
import { TransactionsTypes } from "@/shared/enums/transactionsTypes";
import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native"
import clsx from "clsx";
import { colors } from "@/shared/colors";

interface Props {
    setTransactionType: (type: TransactionsTypes) => void;
    typeId?: number;
}

export const TransactionsTypeSelect: FC<Props> = ({ setTransactionType, typeId }) => {
    return (
        <View className="flex-row items-center gap-2 mt-2">
            <TouchableOpacity 
                onPress={() => setTransactionType(TransactionsTypes.REVENUE)}
                className={clsx(
                    "flex-row items-center p-2 flex-1 justify-center h-[58px] rounded-lg",
                    typeId === TransactionsTypes.REVENUE
                        ? "bg-accent-brand-background-primary"
                        : "bg-background-tertiary"
                )}>
                <MaterialIcons 
                    name="arrow-circle-up"
                    color={
                        typeId === TransactionsTypes.REVENUE
                            ? colors.white
                            : colors["accent-brand-light"]
                    }
                    size={30}
                    className="mr-2" 
                />
                <Text className="text-white font-bold">Entrada</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => setTransactionType(TransactionsTypes.EXPENSE)}
                className={clsx(
                    "flex-row items-center p-2 flex-1 justify-center h-[58px] rounded-lg",
                    typeId === TransactionsTypes.EXPENSE
                        ? "bg-accent-red-background-primary"
                        : "bg-background-tertiary"
                )}>
                <MaterialIcons name="arrow-circle-down" 
                    color={
                        typeId === TransactionsTypes.EXPENSE
                            ? colors.white
                            : colors["accent-red"]
                    }
                    size={30}
                    className="mr-2" 
                />
                <Text className="text-white font-bold">Saída</Text>
            </TouchableOpacity>
        </View>
    )
}