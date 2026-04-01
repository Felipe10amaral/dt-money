//@ts-ignore
import {MaterialIcons} from '@expo/vector-icons'
import { CreateTransactionsRequest } from "@/interface/https/createTransactionsRequest"
import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { colors } from '@/shared/colors'
import { useBottomSheetContext } from '@/context/bottomSheet.context'

export const NewTransactions = () => {
    const {closeBottomSheet} = useBottomSheetContext()

    const [transactions, setTransactions] = useState<CreateTransactionsRequest>({
        categoryId: 0,
        description: "",
        typeId: 0,
        value: 0
    })
    return (
        <View className='px-8 py-6'>
            <TouchableOpacity 
                className='w-full flex-row items-center justify-between'
                onPress={closeBottomSheet}
            >
                <Text className='text-white text-xl font-bold'>Nova Transação</Text>
                <MaterialIcons name="close" color={colors.gray["700"]} size={20} />
            </TouchableOpacity>
        </View>
    )
}