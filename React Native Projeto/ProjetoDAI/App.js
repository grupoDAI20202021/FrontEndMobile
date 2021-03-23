import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {  } from 'react-native';
import HomeWithoutLogin from "./assets/screens/Home/HomeWithoutLogin";
import OpenScreen from "./assets/screens/Home/OpenScreen";
import BottomNavbar from "./assets/screens/Home/Components/BottomNavbar";
import Login from "./assets/screens/Home/Login";
import SignUp from "./assets/screens/Home/SignUp";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OpenScreen" component={OpenScreen} options={{headerShown: false, transitionSpec: {open: transition,close: transition}}}/>
        <Stack.Screen name="HomeWithoutLogin" component={HomeWithoutLogin} options={{headerShown: false, transitionSpec: {open: transition,close: transition}}}/>
        <Stack.Screen name="BottomNavbar" component={BottomNavbar} options={{headerShown: false, transitionSpec: {open: transition,close: transition}}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false, transitionSpec: {open: transition,close: transition}}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false, transitionSpec: {open: transition,close: transition}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const transition = {
  animation: 'timing',
  config:{
    duration:200,
  }
};