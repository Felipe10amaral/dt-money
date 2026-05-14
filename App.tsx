//@ts-ignore
import './src/styles/global.css'
import NavigationRoutes from '@/routes';
import { AuthContextProvider } from '@/context/auth.context';
import { SnackbarContextProvider } from '@/context/snackbar.context';
import { Snackbar } from '@/Components/Snackbar';
import { BottomSheetProvider } from '@/context/bottomSheet.context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TransactionsProvider } from '@/context/Transactions.context';

export default function App() {
  return (
   <GestureHandlerRootView className='flex-1'> 
    <SnackbarContextProvider>
       <AuthContextProvider>
        <TransactionsProvider>
          <BottomSheetProvider>
            <NavigationRoutes />
            <Snackbar />
          </BottomSheetProvider>
        </TransactionsProvider> 
       </AuthContextProvider>
    </SnackbarContextProvider>
   </GestureHandlerRootView>
  );
}
