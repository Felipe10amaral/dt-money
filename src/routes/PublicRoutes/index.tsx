import { Login } from '@/screen/Login';
import { Register } from '@/screen/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'

export type PublicStackParamList = {
    Login: undefined;
    Register: undefined
    
}

const PublicRoutes = () => {
    const PublicStack = createStackNavigator<PublicStackParamList>();

    return (
      <PublicStack.Navigator screenOptions={{headerShown: false}}>
        <PublicStack.Screen name='Login' component={Login} />
        <PublicStack.Screen name='Register' component={Register} />
      </PublicStack.Navigator>
       
    )
}

export default PublicRoutes;
