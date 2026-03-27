import { createContext, FC, PropsWithChildren, useCallback } from "react"

interface BottomSheetContextType {
    openBottomSheet: (content: React.ReactNode, index: number) => void
    closeBottomSheet: () => void
}

export const BottomSheetContext = createContext({} as BottomSheetContextType)

export const BottomSheetProvider: FC<PropsWithChildren> = ({children}) => {
    const openBottomSheet = useCallback( (content: React.ReactNode, index: number) => {

    },[])

    const closeBottomSheet = () => {}

    return (
        <BottomSheetContext.Provider
            value={{
                openBottomSheet,
                closeBottomSheet
            }}
        >
            {children}
        </BottomSheetContext.Provider>
    )
}