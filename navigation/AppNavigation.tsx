import { createStackNavigator } from '@react-navigation/stack'; 
import { RootStackParamList } from './types';
import LoginScreen from '@/screens/Login';
import SignUpScreen from '@/screens/SignUp';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}