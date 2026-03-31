import './src/styles/global.css'
import NavigationRoutes from '@/routes';
import { AuthContextProvider } from '@/context/auth.context';
import { SnackbarContextProvider } from '@/context/snackbar.context';
import { Snackbar } from '@/Components/Snackbar';
import { Home } from '@/screen/Home';
import { BottomSheetProvider } from '@/context/bottomSheet.context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
   <GestureHandlerRootView className='flex-1'> 
    <SnackbarContextProvider>
       <AuthContextProvider>
        <BottomSheetProvider>
         <Home />
         <Snackbar />
        </BottomSheetProvider>
       </AuthContextProvider>
    </SnackbarContextProvider>
   </GestureHandlerRootView>
  );
}
