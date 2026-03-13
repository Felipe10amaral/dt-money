import { useEffect, useState } from "react"
import { Keyboard } from "react-native"

export const useKeyboardView = () => {
    const [keyboardVisible, setKeyboardVisible] = useState(false)

    useEffect(() => {
        const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardVisible(true)
        })

        const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardVisible(false)
        })

        return () => {
            keyboardHideListener.remove();
            keyboardShowListener.remove();
        }
    },[])

    return ( keyboardVisible )
}