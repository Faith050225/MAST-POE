// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddMenuItemScreen from './screens/AddMenuItemScreen';
import LoginScreen from './screens/LoginScreen';
import FilterMenuScreen from './screens/FilterMenuScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddMenuItem" component={AddMenuItemScreen} />
        <Stack.Screen name="FilterMenu" component={FilterMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;