import React from 'react';
import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
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
                    <ScrollView style={styles.activitiesScreenScroll}>
                        <View style={styles.activitiesScreenScrollView}>
                            <Text style={styles.activitiesText}>Atividades</Text>
                            <View style={styles.favoriteActivities}>
                                <Text style={styles.seeAllActivities}>Ver todas</Text>
                            </View>
                            <View style={styles.sportActivities}>
                                <View style={styles.sportActivitiesSearch}>
                                    <Text style={styles.sportActivitiesSearchText}>Procurar</Text>
                                </View>
                                <Text style={styles.sportActivitiesSportText}>Desporto</Text>
                                <Text style={styles.sportActivitiesHowManyText}>8 atividades esta semana</Text>
                            </View>
                            <View style={styles.literatureActivities}>
                                <View style={styles.literatureActivitiesSearch}>
                                    <Text style={styles.literatureActivitiesSearchText}>Procurar</Text>
                                </View>
                                <Text style={styles.literatureActivitiesSportText}>Literatura</Text>
                                <Text style={styles.literatureActivitiesHowManyText}>7 atividades esta semana</Text>
                            </View>
                            <View style={styles.videoGamesActivities}>
                                <View style={styles.videoGamesActivitiesSearch}>
                                    <Text style={styles.videoGamesActivitiesSearchText}>Procurar</Text>
                                </View>
                                <Text style={styles.videoGamesActivitiesSportText}>Video Jogos</Text>
                                <Text style={styles.videoGamesActivitiesHowManyText}>11 atividades esta semana</Text>
                            </View>
                            <View style={styles.musicActivities}>
                                <View style={styles.musicActivitiesSearch}>
                                    <Text style={styles.musicActivitiesSearchText}>Procurar</Text>
                                </View>
                                <Text style={styles.musicActivitiesSportText}>Música</Text>
                                <Text style={styles.musicActivitiesHowManyText}>3 atividades esta semana</Text>
                            </View>
                        </View>
                    </ScrollView>
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
        backgroundColor: '#FCFCFC',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
    },

    topOfTheScreen:{
        flex: 1,
        maxWidth:414,
        width:"100%",
        backgroundColor: '#FCFCFC',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
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

    activitiesScreen:{
        flex: 3,
        maxWidth:414,
        marginTop:-25,
        width:"100%",
        backgroundColor: '#FCFCFC',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
    },

    activitiesScreenScroll:{
        flex: 3,
        width:"100%",
    },

    activitiesScreenScrollView: {
        flex: 1,
        backgroundColor:"#FCFCFC",
        alignItems: 'center',
        justifyContent: 'center',
    },

    favoriteActivities:{
    },

    activitiesText:{
        color:"#1A82C4",
        fontFamily:'RedHatDisplay_400Regular',
        fontWeight:"bold",
        fontSize:38,
    },

    seeAllActivities:{
        marginTop:15,
        backgroundColor:"#F0F0F0",
        color:"#1A82C4",
        borderRadius:180,
        width:140,
        textAlign:'center',
        fontSize:18,
        fontFamily:"RedHatDisplay_400Regular",
    },

    //Sports
    sportActivities:{
        marginTop:15,
        maxWidth:370,
        width:"90%",
        height:180,
        backgroundColor:"#FAFAFA",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.00,
        elevation: 1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
    },
    sportActivitiesSearch:{
        backgroundColor:"#F0F0F0",
        width:"36.2%",
        position:"absolute",
        bottom:"12%",
        borderRadius:50,
    },
    sportActivitiesSearchText:{
        textAlign:'center',
        fontSize:18,
        fontFamily:"RedHatDisplay_400Regular",
        color:"#FF5A5F",
    },
    sportActivitiesSportText:{
        textAlign:'center',
        fontSize:34,
        fontFamily:"RedHatDisplay_400Regular",
        fontWeight:"bold",
        color:"#FF5A5F",
        position:"absolute",
        top:"12%",
        left:"8.9%",
    },
    sportActivitiesHowManyText:{
        color:"#CDCDCD",
        fontSize:18,
        position:"absolute",
        left:"8.9%",
    },

    //Literature
    literatureActivities:{
        marginTop:15,
        maxWidth:370,
        width:"90%",
        height:180,
        backgroundColor:"#FAFAFA",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.00,
        elevation: 1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
    },
    literatureActivitiesSearch:{
        backgroundColor:"#F0F0F0",
        width:"36.2%",
        position:"absolute",
        bottom:"12%",
        borderRadius:50,
    },
    literatureActivitiesSearchText:{
        textAlign:'center',
        fontSize:18,
        fontFamily:"RedHatDisplay_400Regular",
        color:"#FABE55",
    },
    literatureActivitiesSportText:{
        textAlign:'center',
        fontSize:34,
        fontFamily:"RedHatDisplay_400Regular",
        fontWeight:"bold",
        color:"#FABE55",
        position:"absolute",
        top:"12%",
        left:"8.9%",
    },
    literatureActivitiesHowManyText:{
        color:"#CDCDCD",
        fontSize:18,
        position:"absolute",
        left:"8.9%",
    },

    //Video Games
    videoGamesActivities:{
        marginTop:15,
        maxWidth:370,
        width:"90%",
        height:180,
        backgroundColor:"#FAFAFA",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.00,
        elevation: 1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
    },
    videoGamesActivitiesSearch:{
        backgroundColor:"#F0F0F0",
        width:"36.2%",
        position:"absolute",
        bottom:"12%",
        borderRadius:50,
    },
    videoGamesActivitiesSearchText:{
        textAlign:'center',
        fontSize:18,
        fontFamily:"RedHatDisplay_400Regular",
        color:"#8AC926",
    },
    videoGamesActivitiesSportText:{
        textAlign:'center',
        fontSize:34,
        fontFamily:"RedHatDisplay_400Regular",
        fontWeight:"bold",
        color:"#8AC926",
        position:"absolute",
        top:"12%",
        left:"8.9%",
    },
    videoGamesActivitiesHowManyText:{
        color:"#CDCDCD",
        fontSize:18,
        position:"absolute",
        left:"8.9%",
    },

    //Music
    musicActivities:{
        marginTop:15,
        maxWidth:370,
        width:"90%",
        height:180,
        backgroundColor:"#FAFAFA",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.00,
        elevation: 1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
    },
    musicActivitiesSearch:{
        backgroundColor:"#F0F0F0",
        width:"36.2%",
        position:"absolute",
        bottom:"12%",
        borderRadius:50,
    },
    musicActivitiesSearchText:{
        textAlign:'center',
        fontSize:18,
        fontFamily:"RedHatDisplay_400Regular",
        color:"#1A82C4",
    },
    musicActivitiesSportText:{
        textAlign:'center',
        fontSize:34,
        fontFamily:"RedHatDisplay_400Regular",
        fontWeight:"bold",
        color:"#1A82C4",
        position:"absolute",
        top:"12%",
        left:"8.9%",
    },
    musicActivitiesHowManyText:{
        color:"#CDCDCD",
        fontSize:18,
        position:"absolute",
        left:"8.9%",
    },
});