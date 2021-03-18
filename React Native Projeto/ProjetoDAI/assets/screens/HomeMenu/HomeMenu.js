import React from 'react';
import { Text } from 'react-native';
import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';

export default function HomeMenu(){
    let [fontsLoaded] = useFonts({
        RedHatDisplay_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        <Text>asdasdasdasdasdasdasdasd</Text>
    }
}