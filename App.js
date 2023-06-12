import { StyleSheet, View } from 'react-native';
import LoginPage from './src/pages/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPasswordPage from './src/pages/ForgotPasswordPage';
import RegisterPage from './src/pages/RegisterPage';
import Dashboard from './src/pages/Dashboard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown:false}}/>
        <Stack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage} options={{headerShown:false}}/>
        <Stack.Screen name="RegisterPage" component={RegisterPage} options={{headerShown:false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}