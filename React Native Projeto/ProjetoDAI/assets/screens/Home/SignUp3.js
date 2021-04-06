import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text, Image} from 'react-native';
import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function SignUp3 ({ navigation }){
    let [fontsLoaded] = useFonts({
        RedHatDisplay_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <View style={styles.headContainer}>
                    <Text style={styles.pickAreas}>Escolhe as tuas áreas de interesse!</Text>
                    <TouchableHighlight onPress={() => navigation.navigate('SignUp2')} style={styles.back}>
                        <FontAwesomeIcon icon={faChevronLeft} style={styles.chevronLeft} size={15}/>
                    </TouchableHighlight>
                </View>
                <Text style={styles.recomendations}>As recomendações serão feitas consoante as tuas escolhas</Text>
                <TouchableHighlight style={styles.sports}>
                    <View style={styles.sportsView}>
                        <Text style={styles.sportsText}>Desporto</Text>
                        <Image source={require("../../sports.png")} style={styles.sportsimg}/>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.literature}>
                    <View style={styles.literatureView}>
                        <Text style={styles.literatureText}>Literatura</Text>
                        <Image source={require("../../literature.png")} style={styles.literatureimg}/>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.cinema}>
                    <View style={styles.cinemaView}>
                        <Text style={styles.cinemaText}>Cinema</Text>
                        <Image source={require("../../cinema.png")} style={styles.cinemaimg}/>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.music}>
                    <View style={styles.musicView}>
                        <Text style={styles.musicText}>Música</Text>
                        <Image source={require("../../music.png")} style={styles.musicimg}/>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.videogames}>
                    <View style={styles.videogamesView}>
                        <Text style={styles.videogamesText}>Videojogos</Text>
                        <Image source={require("../../videogames.png")} style={styles.videogamesimg}/>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.continueButton} onPress={() => navigation.navigate('SignUp4')}>
                    <View style={styles.continueButtonView}>
                        <Text style={styles.textContinueButton}>Continuar</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FCFCFC',
        alignItems: 'center',
        justifyContent: 'center',
    },

    headContainer:{
        position: 'absolute',
        maxWidth: 375,
        height: '10%',
        width: '100%',
        top: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    back:{
        position:'absolute',
        left: '2%'
    },
    
    chevronLeft:{
        color: '#DBDBDB',
    },

    pickAreas:{
        fontFamily:'RedHatDisplay_400Regular',
        fontSize:20,
        position:'absolute',
        color:'#1A82C4',
        textAlign: 'center',
    },

    recomendations:{
        fontFamily:'RedHatDisplay_400Regular',
        fontSize:20,
        position:'absolute',
        color:'#D4D4D4',
        textAlign: 'center',
        maxWidth: 350,
        top: '10%',
    },

    sports:{
        position: 'absolute',
        maxWidth: 360,
        top: '20%',
        width: '85%',
        height: 70,
        backgroundColor: '#ff5a5f',
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row",
    },

    sportsView:{
        width: '100%',
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent:'flex-start',
    },

    sportsText:{
        position: 'absolute',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: "white",
        fontSize: 36,
        fontFamily:'RedHatDisplay_400Regular',
        marginLeft:100,
    },

    sportsimg:{
        width: 70,
        height: 70,
    },

    literature:{
        position: 'absolute',
        maxWidth: 360,
        top: '33%',
        width: '85%',
        height: 70,
        backgroundColor: '#fabe55',
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },

    literatureView:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent:'center',
    },

    literatureText:{
        position: 'absolute',
        textAlign: 'center',
        color: "white",
        fontSize: 36,
        fontFamily:'RedHatDisplay_400Regular',
    },

    literatureimg:{
        width: 70,
        height: 70,
        left: '0%',
    },

    cinema:{
        position: 'absolute',
        maxWidth: 360,
        top: '46%',
        width: '85%',
        height: 70,
        maxHeight: 70,
        backgroundColor: '#6a4c93',
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cinemaView:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent:'center',
    },

    cinemaText:{
        position: 'absolute',
        textAlign: 'center',
        color: "white",
        fontSize: 36,
        fontFamily:'RedHatDisplay_400Regular',
    },

    cinemaimg:{
        flex: 1,
        width: 70,
        height: 70,
        left: '0%',
    },

    music:{
        position: 'absolute',
        maxWidth: 360,
        top: '59%',
        width: '85%',
        height: 70,
        maxHeight: 70,
        backgroundColor: '#1a82c4',
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },

    musicView:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent:'center',
    },

    musicText:{
        position: 'absolute',
        textAlign: 'center',
        color: "white",
        fontSize: 36,
        fontFamily:'RedHatDisplay_400Regular',
    },

    musicimg:{
        flex: 1,
        width: 70,
        height: 70,
        left: '0%',
    },

    videogames:{
        position: 'absolute',
        maxWidth: 360,
        top: '72%',
        width: '85%',
        height: 70,
        maxHeight: 70,
        backgroundColor: '#8ac926',
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },

    videogamesView:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent:'center',
    },

    videogamesText:{
        position: 'absolute',
        textAlign: 'center',
        color: "white",
        fontSize: 36,
        fontFamily:'RedHatDisplay_400Regular',
    },

    videogamesimg:{
        flex: 1,
        width: 70,
        height: 70,
        left: '0%',
    },

    continueButton:{
        position: 'absolute',
        maxWidth: 360,
        top: '90%',
        width: '91%',
        height: '7%',
        backgroundColor: '#1A82C4',
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },

    ContinueButtonView:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent:'center'
    },

    textContinueButton:{
        color: "white",
        fontSize: 22,
        fontFamily:'RedHatDisplay_400Regular',
        width:275,
        textAlign: 'center',
    },


})