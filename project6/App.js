import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CheckoutScreen from './screens/CartScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'My Cart' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
