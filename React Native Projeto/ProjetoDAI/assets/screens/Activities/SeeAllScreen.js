import React, {useState, useEffect} from 'react';
import { Animated, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, FlatList, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faMapMarkedAlt, faUser, faCalendarAlt, faClock} from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SeeAllScreen({ navigation }){
    const scrollY= new Animated.Value(0);
    let scrollYValue = scrollY._value;
    const [scrolled, setScrolled] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [allActivity, setAllActivity] = useState(null);
    const [valueToken, setValueToken] = useState(null);
    const [firstActivitieSports, setFirstActivitieSports] = useState(0);

    
    //Fetch
    useEffect(() => {
        async function submit() {
            const valueTokenStorage = await AsyncStorage.getItem('userToken');
            const valueToken = JSON.parse(valueTokenStorage);
            setValueToken(valueToken);
            

            const response = await fetch("http://192.168.1.74:8080/api/activities", {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            const response_1 = await response.json();
            setAllActivity(response_1);
            //console.log(profileData);
        }
        if(!loaded){
            submit();
            setLoaded(true);
            //console.log(profileData);
        }
    });
    

    let [fontsLoaded] = useFonts({
        RedHatDisplay_400Regular,
    });
    if (!fontsLoaded && !loaded) {
        return <AppLoading/>;
    } else {
        return(
            <View style={styles.container}>
                <View style={scrolled ? styles.topNavbarScrolled : styles.topNavbar}>
                    <FontAwesomeIcon icon={faChevronLeft} onPress={() => navigation.navigate('HomeMenu')} style={styles.chevronLeft}/>
                    <Text style={styles.profileText}>Atividades</Text>
                </View>
                <View style={styles.seeAllActivitiesScreen}>
                    <ScrollView scrollEventThrottle={1} onScroll={(e)=>{scrollY.setValue(e.nativeEvent.contentOffset.y); scrollYValue = scrollY._value; scrollYValue > 0 ? setScrolled(true) : setScrolled(false);}}>
                        <View style={styles.centerActivities}>
                            <View style={styles.allActivitiesTextView}>
                                <Text style={styles.forYouText}>Para ti!</Text>
                                <Text style={styles.comingSoonText}>Escolhe uma das nossas categorias!</Text>
                            </View>
                            <View style={styles.sportActivities}>
                                <Text style={styles.sportActivitiesSportText}>Desporto</Text>
                                <Image source={require("../../sports.png")} style={styles.sportsPng}></Image>
                                {/*<FlatList data={allActivity}
                                    scrollEventThrottle={1} onScroll={(e)=>{scrollY.setValue(e.nativeEvent.contentOffset.y); scrollYValue = scrollY._value; scrollYValue > 0 ? setScrolled(true) : setScrolled(false);}}
                                    
                                    renderItem={({item}) => {
                                            return(
                                                <View>
                                                    <Text >asdasdadasdasdasda</Text>
                                                </View>
                                            );
                                    }}
                                    keyExtractor={(item, index) => index.toString()}
                                    style={styles.profileScreenScroll}
                                />*/}
                                <TouchableHighlight style={styles.sportActivitiesSearch} onPress={() => navigation.navigate('SportsScreen')}>
                                    <Text style={styles.sportActivitiesSearchText}>Ver +</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.sportActivities}>
                                <Text style={styles.literatureActivitiesSportText}>Literatura</Text>
                                <Image source={require("../../literature.png")} style={styles.literaturePng}/>
                                <TouchableHighlight style={styles.literatureActivitiesSearch} onPress={() => navigation.navigate('LiteratureScreen')}>
                                    <Text style={styles.literatureActivitiesSearchText}>Ver +</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.musicActivities}>
                                <Text style={styles.musicActivitiesSportText}>Música</Text>
                                <Image source={require("../../music.png")} style={styles.musicPng}/>
                                <TouchableHighlight style={styles.musicActivitiesSearch} onPress={() => navigation.navigate('MusicScreen')}>
                                    <Text style={styles.musicActivitiesSearchText}>Ver +</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.cinemaActivities}>
                                <Text style={styles.cinemaActivitiesSportText}>Cinema</Text>
                                <Image source={require("../../cinema.png")} style={styles.cinemaPng}/>
                                <TouchableHighlight style={styles.cinemaActivitiesSearch} onPress={() => navigation.navigate('CinemaScreen')}>
                                    <Text style={styles.cinemaActivitiesSearchText}>Ver +</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.videoGamesActivities}>
                                <Text style={styles.videoGamesActivitiesSportText}>Video Jogos</Text>
                                <Image source={require("../../videogames.png")} style={styles.videogamesPng}/>
                                <TouchableHighlight style={styles.videoGamesActivitiesSearch} onPress={() => navigation.navigate('VideoGameScreen')}>
                                    <Text style={styles.videoGamesActivitiesSearchText}>Ver +</Text>
                                </TouchableHighlight>
                            </View>
                            
                        </View>
                    </ScrollView>
                </View>
             </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
    },

    topNavbar: {
        flex: 1,
        width:"100%",
        backgroundColor: '#FCFCFC',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:2,
    },

    topNavbarScrolled:{
        flex: 1,
        width:"100%",
        backgroundColor: '#FCFCFC',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    
    profileText:{
        position:'absolute',
        bottom:"0%",
        fontSize:40,
        color:"#1A82C4",
        fontFamily:"RedHatDisplay_400Regular",
    },

    chevronLeft:{
        position:'absolute',
        bottom:17,
        left:'4.83%',
        color:"#B0B0B0",
    },

    seeAllActivitiesScreen:{
        flex: 5,
        maxWidth:414,
        width:"100%",
        backgroundColor: '#FCFCFC',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: "column",
    },

    allActivitiesTextView:{
        justifyContent:'flex-start',
        flexDirection:'column',
        alignItems:'flex-start',
        marginTop:20,
        marginBottom:20,
    },

    forYouText:{
        color:"#1A82C4",
        fontFamily:"RedHatDisplay_400Regular",
        fontSize:36,
        fontWeight:"bold",
    },

    comingSoonText:{
        color:"#B1B1B1",
        fontFamily:"RedHatDisplay_400Regular",
        fontSize:20,
    },

    centerActivities:{
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        flexDirection:"column",
    },

    //Sports
    sportActivities:{
        marginTop:15,
        maxWidth:370,
        width:"100%",
        height:130,
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
        left:"6.9%",
    },
    sportActivitiesHowManyText:{
        color:"#CDCDCD",
        fontSize:18,
        position:"absolute",
        left:"8.9%",
    },
    sportsPng:{
        width:60,
        height:60,
        position:"absolute",
        top:"12%",
        right:"4.9%",
    },

    //Literature
    literatureActivities:{
        marginTop:15,
        maxWidth:370,
        width:"100%",
        height:130,
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
        left:"6.9%",
    },
    literatureActivitiesHowManyText:{
        color:"#CDCDCD",
        fontSize:18,
        position:"absolute",
        left:"8.9%",
    },
    literaturePng:{
        width:60,
        height:60,
        position:"absolute",
        top:"12%",
        right:"4.9%",
    },
    
    //Music
    musicActivities:{
        marginTop:15,
        maxWidth:370,
        width:"100%",
        height:130,
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
        left:"6.9%",
    },
    musicActivitiesHowManyText:{
        color:"#CDCDCD",
        fontSize:18,
        position:"absolute",
        left:"8.9%",
    },
    musicPng:{
        width:60,
        height:60,
        position:"absolute",
        top:"12%",
        right:"4.9%",
    },

    //Cinema
    cinemaActivities:{
        marginTop:15,
        maxWidth:370,
        width:"100%",
        height:130,
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
    cinemaActivitiesSearch:{
        backgroundColor:"#F0F0F0",
        width:"36.2%",
        position:"absolute",
        bottom:"12%",
        borderRadius:50,
    },
    cinemaActivitiesSearchText:{
        textAlign:'center',
        fontSize:18,
        fontFamily:"RedHatDisplay_400Regular",
        color:"#6A4C93",
    },
    cinemaActivitiesSportText:{
        textAlign:'center',
        fontSize:34,
        fontFamily:"RedHatDisplay_400Regular",
        fontWeight:"bold",
        color:"#6A4C93",
        position:"absolute",
        top:"12%",
        left:"6.9%",
    },
    cinemaActivitiesHowManyText:{
        color:"#CDCDCD",
        fontSize:18,
        position:"absolute",
        left:"8.9%",
    },
    cinemaPng:{
        width:60,
        height:60,
        position:"absolute",
        top:"12%",
        right:"4.9%",
    },

    //Video Games
    videoGamesActivities:{
        marginTop:15,
        maxWidth:370,
        width:"100%",
        height:130,
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
        marginBottom:20,
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
        left:"6.9%",
    },
    videoGamesActivitiesHowManyText:{
        color:"#CDCDCD",
        fontSize:18,
        position:"absolute",
        left:"8.9%",
    },
    videogamesPng:{
        width:60,
        height:60,
        position:"absolute",
        top:"12%",
        right:"4.9%",
    },
});