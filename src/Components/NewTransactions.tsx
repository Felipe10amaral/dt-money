//@ts-ignore
import {MaterialIcons} from '@expo/vector-icons'
import { CreateTransactionsRequest } from "@/interface/https/createTransactionsRequest"
import { useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { colors } from '@/shared/colors'
import { useBottomSheetContext } from '@/context/bottomSheet.context'
import CurrencyInput from 'react-native-currency-input'

export const NewTransactions = () => {
    const {closeBottomSheet} = useBottomSheetContext()

    const [transactions, setTransactions] = useState<CreateTransactionsRequest>({
        categoryId: 0,
        description: "",
        typeId: 0,
        value: 0
    })

    const setTransactionsData = (key: keyof CreateTransactionsRequest, value: string | number) => {
        setTransactions( (prevData) => ({...prevData, [key]: value}))
    }

   
    return (
        <View className='px-8 py-6'>
            <TouchableOpacity 
                className='w-full flex-row items-center justify-between'
                onPress={closeBottomSheet}
            >
                <Text className='text-white text-xl font-bold'>Nova Transação</Text>
                <MaterialIcons name="close" color={colors.gray["700"]} size={20} />
            </TouchableOpacity>
            <View className='flex-1 mt-8 mb-8'>
                <TextInput 
                    className='text-white text-lg bg-background-primary my-2 rounded-lg-[6] pl-4 h-[50px]' 
                    placeholder='Descrição'
                    placeholderTextColor={colors.gray["700"]}
                    value={transactions.description}
                    onChangeText={(text) => setTransactionsData("description", text)}
                />

                <CurrencyInput 
                    value={transactions.value}
                    className='text-white text-lg bg-background-primary my-2 rounded-lg-[6] pl-4 h-[50px]'
                    prefix='R$ '
                    delimiter='.'
                    separator=','
                    precision={2}
                    minValue={0}
                    onChangeValue={(value) => setTransactionsData("value", value ?? 0)}
                />
            </View>
        </View>
    )
}