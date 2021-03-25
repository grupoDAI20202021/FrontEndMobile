import React from 'react';
import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import AppLoading from 'expo-app-loading';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

export default function HomeMenu({ navigation }){
    let [fontsLoaded] = useFonts({
        RedHatDisplay_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return(
            <View style={styles.container}>
                <View style={styles.topOfTheScreen}>
                    <TouchableHighlight onPress={() => navigation.navigate('Profile')} underlayColor={"rgba(15, 122, 190, 0.8)"} style={styles.profileButton}>
                        <FontAwesomeIcon icon={faUser} style={styles.profileIcon} size={20}/>
                    </TouchableHighlight>
                    <Image source={require("../../LOGOPNG.png")} style={styles.logoPng}/>
                    <TouchableHighlight onPress={() => navigation.navigate('Notifications')} underlayColor={"rgba(15, 122, 190, 0.8)"} style={styles.notificationButton}>
                        <FontAwesomeIcon icon={faBell} style={styles.bell} size={20}/>
                    </TouchableHighlight>
                </View>
                <View style={styles.activitiesScreen}>
                    <Text style={styles.activitiesText}>Atividades</Text>
                    <View style={styles.favoriteActivities}>
                        <Text>Ver todas</Text>
                    </View>
                </View>
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
        flexDirection: "column",
        overflow: "scroll",
    },

    topOfTheScreen:{
        flex: 1,
        maxWidth:414,
        width:"100%",
        height:100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },

    activitiesScreen:{
        flex: 3,
        maxWidth:414,
        width:"100%",
        height:100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },

    favoriteActivities:{
        position:"absolute",
        top:600,
    },

    logoPng:{
        width:220,
        height:110,
        marginTop:10,
    },

    notificationButton:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        width:60,
        height:60,
        backgroundColor: 'transparent',
        position:"absolute",
        right:"3.30%",
        zIndex:2,
    },

    bell:{
        color:"#515151",
    },

    profileButton:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        width:60,
        height:60,
        backgroundColor: 'transparent',
        position:"absolute",
        left:"3.30%",
        zIndex:2,
    },

    profileIcon:{
        color:"#515151",
    },

    activitiesText:{
        position:"absolute",
        top:"0%",
        color:"#1A82C4",
        fontFamily:'RedHatDisplay_400Regular',
        fontWeight:"bold",
        fontSize:38,
    },
});