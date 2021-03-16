import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Text } from 'react-native';
import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';


export default function HomeWithoutLogin(){
    let [fontsLoaded] = useFonts({
      RedHatDisplay_400Regular,
    });
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Image source={require("../../LOGOPNG.png")} style={styles.logoPng}/>
                <TouchableHighlight onPress={loginButton} underlayColor={"rgba(15, 122, 190, 0.8)"} style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Inicar Sessão</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const loginButton = () =>{
    console.log("Clicaste no botão")
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDEEEE',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoPng:{
        width:300,
        height:100,
        position:"absolute",
        top:"35.49%"
    },

    loginButton:{
        width:180,
        height:53,
        position:"absolute",
        top:"50%",
        left:"2.65%",
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FCFCFC',
        borderRadius:32,
    },

    loginButtonText:{
        color:'#3B94CC',
    }
});