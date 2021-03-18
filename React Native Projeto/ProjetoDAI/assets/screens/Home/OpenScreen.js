import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Text } from 'react-native';
import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';


export default function HomeWithoutLogin({ navigation }){
    let [fontsLoaded] = useFonts({
      RedHatDisplay_400Regular,
    });
    if (!fontsLoaded) {
      return <AppLoading/>;
    } else {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Image source={require("../../LOGOPNG.png")} style={styles.logoPng}/>
                <View style={styles.loginButtonsView}>
                    <TouchableHighlight onPress={loginButton} underlayColor={"rgba(229, 229, 229, 0.8)"} style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Inicar Sessão</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigation.navigate('HomeWithoutLogin')} underlayColor={"rgba(15, 122, 190, 0.8)"} style={styles.loginGuest}>
                        <Text style={styles.loginGuestText}>Entrar como{"\n"}  convidado</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const loginButton = () =>{
    console.log('asd')
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

    loginButtonsView:{
        flex:1,
        flexDirection:"row" ,
        position:"absolute",
        top:"50%",
        height:65,
        width:360,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    loginButton:{
        width:175,
        height:53,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FCFCFC',
        borderRadius:32,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },

    loginGuest:{
        width:175,
        height:53,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#1A82C4',
        borderRadius:32,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },

    loginGuestText:{
        color:'#FBFAFA',
    },

    loginButtonText:{
        color:'#3B94CC',
    }
});