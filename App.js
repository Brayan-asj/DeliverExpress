import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/loginScreen';
import MainScreen from './Screens/mainScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Inicio de sesión" component={LoginScreen} />
        <Stack.Screen name="Platillos disponibles" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
