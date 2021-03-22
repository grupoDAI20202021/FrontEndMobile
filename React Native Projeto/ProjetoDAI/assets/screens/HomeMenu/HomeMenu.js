import React from 'react';
import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import AppLoading from 'expo-app-loading';

export default function HomeMenu(){
    let [fontsLoaded] = useFonts({
        RedHatDisplay_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return(
            <View style={styles.container}>
                <Image source={require("../../LOGOPNG.png")} style={styles.logoPng}/>
                <TouchableHighlight onPress={loginButton} underlayColor={"rgba(15, 122, 190, 0.8)"} style={styles.notificationButton}>
                    <Text>asdadas</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const loginButton = () =>{
    console.log('asd');
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoPng:{
        width:300,
        height:150,
        position:"absolute",
        top:"4.80%",
    },

    notificationButton:{
        width:80,
        height:80,
        backgroundColor: '#1A82C4',
        position:"absolute",
        bottom:"0.60%",
        right:"2.50%",
        zIndex:2,
        borderRadius:50,
    },
});