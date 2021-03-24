import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {  } from 'react-native';
import HomeMenu from "./HomeMenu";
import Notifications from "../Home/Notifications";

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="HomeMenu" component={HomeMenu} options={{headerShown: false, transitionSpec: {open: transition,close: transition}}}/>
        <Stack.Screen name="Notifications" component={Notifications} options={{headerShown: false, transitionSpec: {open: transition,close: transition}}}/>
      </Stack.Navigator>
  );
}


const transition = {
  animation: 'timing',
  config:{
    duration:200,
  }
};