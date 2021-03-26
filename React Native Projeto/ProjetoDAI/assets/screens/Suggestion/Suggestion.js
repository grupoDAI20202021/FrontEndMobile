import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Notifications() {
    let [fontsLoaded] = useFonts({
        RedHatDisplay_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return(
            <View style={styles.container}>
                <View style={styles.topNavbar}>
                    <FontAwesomeIcon icon={faChevronLeft} onPress={() => navigation.navigate('HomeMenu')} style={styles.chevronLeft}/>
                    <Text style={styles.notificationText}>Enviar Sugestões</Text>
                </View>
                <View style={styles.notificationScreen}>
                    
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    topNavbar: {
        flex: 1,
        width:"100%",
        height:100,
        backgroundColor: '#fff',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    notificationText:{
        position:'absolute',
        bottom:"0%",
        fontSize:36,
        color:"#1A82C4",
    },

    chevronLeft:{
        position:'absolute',
        bottom:17,
        left:'4.83%',
        color:"#B0B0B0",
    },

    notificationScreen:{
        flex: 5,
        width:"100%",
        backgroundColor:"#aaa",
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop:20,
    },
});