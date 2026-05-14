import { useState, FC, useMemo } from 'react'
import { TouchableOpacity, Text, Modal, TouchableWithoutFeedback, View, FlatList} from 'react-native'
import clsx from 'clsx'
import {Checkbox} from 'expo-checkbox'
import { useTransactionsContext } from '@/context/Transactions.context'

interface Props {
    selectedCategory: number;
    onSelect: (categoryId: number) => void;
}

export const SelectCategoryModal: FC<Props> = ({ selectedCategory, onSelect }) => {
    const [showModal, setShowModal] = useState(false)
   
    const {categories} = useTransactionsContext()
    
    console.log(categories)
    
    const handleModal = () => setShowModal( (prevState) => !prevState)

    const selected = useMemo( () => {
        return categories.find( (category) => category.id === selectedCategory)
    }, [selectedCategory, categories])

    const handleSelect = (categoryId: number) => {
        onSelect(categoryId)
        setShowModal(false)
    }
    
    return (
        <>
            <TouchableOpacity 
                onPress={handleModal}
                className="h-[50] bg-background-primary my-2 rounded-[6] pl-4 justify-center"
            >
                <Text className={clsx("text-white text-lg", selected ? "text-white" : "text-gray-700")}>{selected?.name || "Categoria"}</Text>
            </TouchableOpacity>

            <Modal 
                visible={showModal}
                transparent
                animationType="slide"
            >
                <TouchableWithoutFeedback onPress={handleModal}>
                    <View className="flex-1 justify-center items-center bg-black/50">
                        <View className="w-[90%] bg-background-secondary rounded-xl p-4">
                            <Text className="text-gray-700 text-lg mb-4">Selecione uma categoria</Text>

                            <FlatList 
                                keyExtractor={(item) => `category-${item.id}`}
                                data={categories}
                                renderItem={ ({item}) => (
                                    <TouchableOpacity 
                                        className="flex-row items-center mb-2 bg-gray-800 rounded-lg p-4"
                                        onPress={() => handleSelect(item.id)}   
                                    >
                                        <Checkbox 
                                            value={selected?.id === item.id}
                                            onValueChange={() =>  handleSelect(item.id)}
                                            className="mr-2"
                                        />
                                        <Text className="text-white text-lg">{item.name}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </>
    )
}