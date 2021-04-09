import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Animated, ScrollView, Image, FlatList } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faTrophy } from '@fortawesome/free-solid-svg-icons';

// Verificar se o scroll ta bem
export default function Rank() {
    const scrollY= new Animated.Value(0);
    let scrollYValue = scrollY._value;
    const [scrolled, setScrolled] = useState(false);
    let rankingPosition = 1;

    const [loaded, setLoaded] = useState(false);
    
    //Fetch
    /*useEffect(() => {
        async function submit() {
            const response = await fetch("http://192.168.1.74:8080/api/preferences/7", {//MUDAR O 7
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            const response_1 = await response.json();
            setfavoriteList(response_1);
            console.log(favoriteList);
            setLoaded(true);
        }
        if(!loaded){
            submit();
            setLoaded(true);
        }
    });*/

    let [fontsLoaded] = useFonts({
        RedHatDisplay_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return(
            <View style={styles.container}>
                <View style={scrolled ? styles.topNavbarScrolled : styles.topNavbar}>{/* Não deve estar a dar agora*/}
                    <FontAwesomeIcon icon={faChevronLeft} onPress={() => navigation.navigate('HomeMenu')} style={styles.chevronLeft}/>
                    <Text style={styles.rankText}>Rank</Text>
                </View>
                <View style={styles.rankScreenScrollContainer}>
                    {/*<FlatList data={favoriteList} 
                        renderItem={({ item }) => {
                            return(
                                <View style={styles.everyRankView}>
                                    <View style={styles.myRankPosition}>
                                        <Text style={styles.positionRank}>#{rankingPosition}</Text>
                                        <Image source={require("../../avatar1.png")} style={styles.avatar}/>
                                        <View style={styles.textPositionRank}>
                                            <Text style={styles.nameTextPositionRank}>adasda</Text>
                                            <Text style={styles.pointsTextPositionRank}>adasda</Text>
                                        </View>
                                        <FontAwesomeIcon icon={faTrophy} style={styles.faTrophy1stPlace} size={25}/>
                                    </View>
                                </View>
                            )
                        }}
                        keyExtractor={(item, index) => index}
                        style={styles.rankScreenScroll}
                    />*/}
                </View>
            </View>
        )
    }
}
const changeRankPosition = () =>{
    rankingPosition=rankingPosition+1;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
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

    rankText:{
        position:'absolute',
        bottom:"0%",
        fontSize:40,
        color:"#1A82C4",
    },

    chevronLeft:{
        position:'absolute',
        bottom:17,
        left:'4.83%',
        color:"#B0B0B0",
    },

    rankScreenScrollContainer:{
        flex: 5,
        width:"100%",
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
    },

    rankScreenScroll:{
        flex: 5,
        width:"100%",
    },

    everyRankView:{
        flex: 1,
        backgroundColor:"#FCFCFC",
        alignItems: 'center',
        justifyContent: 'center',
    },

    myRankPosition:{
        maxWidth:400,
        width:"90%",
        height:80,
        backgroundColor:"#F0F0F0",
        borderRadius:50,
        marginTop:10,
        alignItems:"center",
        justifyContent:"space-evenly",
        flexDirection:"row",
    },

    textPositionRank:{
        alignItems:"flex-start",
        justifyContent:"space-evenly",
        flexDirection:"column",
        width:150,
    },

    avatar:{
        width:60,
        height:60,
    },

    positionRank:{
        color:"#1A82C4",
    },

    faTrophy1stPlace:{
        color:"#DEBB02",
    },

    nameTextPositionRank:{
        fontWeight:"bold",
        color:"#1A82C4",
    },

    pointsTextPositionRank:{
        color:"#1A82C4",
    },
});