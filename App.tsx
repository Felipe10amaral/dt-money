import './src/styles/global.css'
import NavigationRoutes from '@/routes';
import { AuthContextProvider } from '@/context/auth.context';
import { SnackbarContextProvider } from '@/context/snackbar.context';
import { Snackbar } from '@/Components/Snackbar';
import { Home } from '@/screen/Home';

export default function App() {
  return (
    <SnackbarContextProvider>
       <AuthContextProvider>
         <Home />
         <Snackbar />
       </AuthContextProvider>
    </SnackbarContextProvider>
  );
}
