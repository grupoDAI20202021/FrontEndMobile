import React from 'react';
import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowCircleRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


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
        <FontAwesomeIcon icon={faChevronLeft} style={styles.chevronLeft} size={15}/>
        <Text style={styles.activitiesOfTheWeek}>Atividades desta semana</Text>
        <Image source={require("../../LOGOPNG.png")} style={styles.logoPng}/>
        <TouchableHighlight onPress={loginWithAccount} underlayColor={"rgba(15, 122, 190, 0.8)"} style={styles.buttonLogin}>
          <View style={styles.buttonLoginWithAccountView}>
            <Text style={styles.textButtonLoginWithAccount}>Entrar com uma conta </Text>
            <FontAwesomeIcon icon={faArrowCircleRight} style={styles.arrowIconButtonLoginWithAccount} size={30}/>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}




const loginWithAccount = () =>{
    console.log("Clicaste no botão")
  }
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  
    buttonLogin:{
      alignItems: 'center',
      flexDirection: "row",
      backgroundColor: 'rgba(26, 130, 196, 0.8)',
      maxWidth: 370,
      width:"89%",
      height: "9%",
      borderRadius: 50,
      position:"absolute",
      bottom:"3%"
    },
  
    textButtonLoginWithAccount:{
      color: "white",
      fontSize: 22,
      fontFamily:'RedHatDisplay_400Regular',
      marginLeft:"15%",
      width:275
    },
  
    arrowIconButtonLoginWithAccount:{
      color: "white",
      marginLeft:"-15%",
    },
  
    buttonLoginWithAccountView:{
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent:'center'
    },

    logoPng:{
      width:300,
      height:150,
      position:"absolute",
      top:"4.80%"
    },

    activitiesOfTheWeek:{
      fontFamily:'RedHatDisplay_400Regular',
      fontSize:31,
      position:'absolute',
      top:'22.2%',
      color:'#1A82C4'
    },

    chevronLeft:{
      position:'absolute',
      top:'22.2%',
    }
  });