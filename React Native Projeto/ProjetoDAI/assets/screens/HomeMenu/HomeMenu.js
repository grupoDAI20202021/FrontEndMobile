import React from 'react';
import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import AppLoading from 'expo-app-loading';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

export default function HomeMenu({ navigation }){
    let [fontsLoaded] = useFonts({
        RedHatDisplay_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return(
            <View style={styles.container}>
                <Image source={require("../../LOGOPNG.png")} style={styles.logoPng}/>
                <TouchableHighlight onPress={() => navigation.navigate('Notifications')} underlayColor={"rgba(15, 122, 190, 0.8)"} style={styles.notificationButton}>
                    <FontAwesomeIcon icon={faBell} style={styles.bell} size={30}/>
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
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        width:70,
        height:70,
        backgroundColor: '#1A82C4',
        position:"absolute",
        bottom:"0.60%",
        right:"2.50%",
        zIndex:2,
        borderRadius:50,
    },

    bell:{
        color:"#fff",
      }
});