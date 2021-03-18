import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faComments, faLightbulb, faUser } from '@fortawesome/free-solid-svg-icons';
import Notifications from "../Notifications";
import Forum from "../Forum";
import Suggestion from "../../Suggestion/Suggestion"
import Profile from "../../Profile/Profile"

const Tab = createBottomTabNavigator();

export default function BottomNavbar() {
    return (
      <Tab.Navigator
        initialRouteName="HomeMenu"
        tabBarOptions={{
          activeTintColor: '#1A82C4',
        }}
      >
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faBell} color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Forum"
          component={Forum}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faComments} color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Suggestion"
          component={Suggestion}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faLightbulb} color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faUser} color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }