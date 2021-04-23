import React, {useState, useEffect} from 'react';
import { Animated, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, FlatList } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, RedHatDisplay_400Regular, RedHatDisplay_500Medium } from '@expo-google-fonts/red-hat-display';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faMapMarkedAlt, faUser, faCalendarAlt, faClock, faStar, faEllipsisH, faHeart, faComments} from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LiteratureInscriptionButton({navigation}) {
    const scrollY= new Animated.Value(0);
    let scrollYValue = scrollY._value;
    const [scrolled, setScrolled] = useState(false);
    const [loaded, setLoaded] = useState(false);


    let [fontsLoaded] = useFonts({
        RedHatDisplay_400Regular,
    });
    if (!fontsLoaded && !loaded) {
        return <AppLoading/>;
    } else {
        return(
            <View style={styles.container}>
                <View style={scrolled ? styles.topNavbarScrolled : styles.topNavbar}>
                    <FontAwesomeIcon icon={faChevronLeft} onPress={() => navigation.navigate('Forum')} style={styles.chevronLeft}/>
                    <View style={styles.posterDataView}>
                        <Image source={require("../../avatar1.png")} style={styles.posterAvatarImage}/>
                        <View>
                            <Text>asadsadas</Text>
                            <View style={styles.timePosterData}>
                                <FontAwesomeIcon icon={faClock} style={styles.clock}/>
                                <Text>asadsadas</Text>
                            </View>
                        </View>
                        <FontAwesomeIcon icon={faEllipsisH} onPress={() => navigation.navigate('Forum')} style={styles.ellipsis}/>
                    </View>
                </View>
                <View>
                    <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
                </View>
                <View style={styles.interactionstView}>
                    <View style={styles.heartView}>
                        <FontAwesomeIcon icon={faHeart} onPress={() => navigation.navigate('Forum')} style={styles.heart}/>
                        <Text>Gosto</Text>
                    </View>
                    <View style={styles.commentsView}>
                        <FontAwesomeIcon icon={faComments} onPress={() => navigation.navigate('Forum')} style={styles.comments}/>
                        <Text>Comentar</Text>
                    </View>
                </View>
                <View>
                    <FontAwesomeIcon icon={faHeart} onPress={() => navigation.navigate('Forum')} style={styles.heart}/>
                    <Text>Number of likes</Text>
                </View>
                {/*<FlatList/>*/}
                <View style={styles.commentScreen}>
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
    //TopNavBar
    topNavbar: {
        flex: 1,
        width:"100%",
        backgroundColor: '#FCFCFC',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'flex-start',
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

    chevronLeft:{
        color:"#B0B0B0",
        marginLeft:10,
        marginRight:10,
    },

    ellipsis:{
        color:"#B0B0B0",
        marginLeft:10,
    },

    clock:{
        color:"#B0B0B0",
        marginLeft:10,
        marginRight:5,
    },
    
    posterDataView:{
        flexDirection:'row'
    },

    timePosterData:{
        flexDirection:'row'
    },

    posterAvatarImage:{
        height:50,
        width:50,
    },
    //InteractionsBar
    interactionstView:{
        borderTopWidth:2,
        borderTopColor:"#F1F1F1",
        borderBottomColor:"#F1F1F1",
        flexDirection: 'row',
    },
    heartView:{
        width:150,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
    },
    heart:{
        color:"#1A82C4",
    },
    commentsView:{
        width:150,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
    },
    comments:{
        color:"#1A82C4",
    },
    //Comment Section
    commentScreen:{
        flex: 5,
        maxWidth:414,
        width:"100%",
        backgroundColor: '#FCFCFC',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: "column",
    },
});