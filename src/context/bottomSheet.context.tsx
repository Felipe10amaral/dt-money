import React, { createContext, FC, PropsWithChildren, useCallback, useContext, useRef, useState } from "react"
import  BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { TouchableWithoutFeedback, View } from "react-native"
import { colors } from "@/shared/colors"

interface BottomSheetContextType {
    openBottomSheet: (content: React.ReactNode, index: number) => void
    closeBottomSheet: () => void
}

export const BottomSheetContext = createContext({} as BottomSheetContextType)

export const BottomSheetProvider: FC<PropsWithChildren> = ({children}) => {
    const [content, setContent] = useState<React.ReactNode | null>(null)
    const [index, setIndex] = useState(-1)
    const [isOpen, setIsOpen] = useState(false)

    const bottomSheetRef = useRef<BottomSheet>(null)

    const snapPoints = ['70%', '90%']
    
    const openBottomSheet = useCallback( (newContent: React.ReactNode, index: number) => {
        setContent(newContent);
        setIndex(index);
        setIsOpen(true);
        requestAnimationFrame( () => {
            bottomSheetRef.current?.snapToIndex(index)
        })
    },[])

    const closeBottomSheet = useCallback( () => {
        setContent(null);
        setIndex(-1);
        setIsOpen(false);
        bottomSheetRef.current?.close()        
    },[])

    const handleSheetChanges = useCallback( (index: number) => {
        if(index === -1) {
            setIsOpen(false)
        }
    }, [])

    return (
        <BottomSheetContext.Provider
            value={{
                openBottomSheet,
                closeBottomSheet
            }}
        >
            {children}

            {
                isOpen && (
                    <TouchableWithoutFeedback onPress={closeBottomSheet}>
                        <View className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-1" />
                    </TouchableWithoutFeedback>
                )
            }

            <BottomSheet
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
                snapPoints={snapPoints}
                index={index}
                style={{zIndex: 2}}
                enablePanDownToClose
                backgroundStyle={{
                    backgroundColor: colors["background-secondary"],
                    borderTopLeftRadius: 32,
                    borderTopRightRadius: 32,
                    elevation: 9
                }}
            >
                <BottomSheetScrollView> {content} </BottomSheetScrollView>
            </BottomSheet>
        </BottomSheetContext.Provider>
    )
}

export const useBottomSheetContext = () => {
    return useContext(BottomSheetContext)
}