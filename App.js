import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/LoginScreen';
import HomeScreen from './src/HomeScreen';


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        gestureEnabled: false
      }}
      >
        <Tab.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Welcome' }}
          // going to have to find out how to make this not show on nav bar
        />
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        {/* if you want to add pages to the bottom nav bar, do it here following format above */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
