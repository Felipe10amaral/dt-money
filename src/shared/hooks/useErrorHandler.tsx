import { UseSnackbarContext } from "@/context/snackbar.context"
import { AppError } from "@/Errors/AppError";

export const useErrorHandler = () => {
    const {notify} = UseSnackbarContext();

    const handleError = (error: unknown, defaultMessage?: string) => {
        const isAppError = error instanceof AppError

        const message = isAppError
            ? error.message
            : defaultMessage ?? "Falha na requisição"

            notify({
                message,
                messageType: "Error"
            })
    }

    return {
        handleError
    }

}