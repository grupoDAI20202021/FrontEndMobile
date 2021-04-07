import React, {useState} from 'react';
import { Text, View, StyleSheet, Animated, ScrollView, Image, TextInput } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// Verificar se o scroll ta bem
export default function Notifications({navigation}) {
    const scrollY= new Animated.Value(0);
    let scrollYValue = scrollY._value;
    const [scrolled, setScrolled] = useState(false);
    let [fontsLoaded] = useFonts({
        RedHatDisplay_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return(
            <View style={styles.container}>
                <View style={scrolled ? styles.topNavbarScrolled : styles.topNavbar}>
                    <FontAwesomeIcon icon={faChevronLeft} onPress={() => navigation.navigate('HomeMenu')} style={styles.chevronLeft}/>
                    <Text style={styles.forumText}>Forum</Text>
                </View>
                <View style={styles.forumScreenScrollContainer}>
                    <Animated.ScrollView style={styles.forumScreenScroll} scrollEventThrottle={1} onScroll={(e)=>{scrollY.setValue(e.nativeEvent.contentOffset.y); scrollYValue = scrollY._value; scrollYValue > 0 ? setScrolled(true) : setScrolled(false);}}>
                        <View style={styles.forumPostsContainer}>
                            <View style={styles.postView}></View>
                        </View>
                    </Animated.ScrollView>
                </View>
                <View style={styles.sendPostView}>
                    <Image source={require("../../avatar1.png")} style={styles.avatar1png}/>
                    <TextInput style={styles.sendPostTextInput}></TextInput>
                    <FontAwesomeIcon icon={faPaperPlane} onPress={() => navigation.navigate('HomeMenu')} style={styles.paperPlane} size={25}/>
                </View>
            </View>
        )
    }
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

    forumText:{
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

    forumScreenScrollContainer:{
        flex: 5,
        width:"100%",
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
    },

    forumScreenScroll:{
        flex: 5,
        width:"100%",
    },

    forumPostsContainer:{
        flex: 5,
        width:"100%",
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
    },

    postView:{
        width:"90%",
        maxWidth:400,
        marginTop:10,
        marginBottom:5,
        height:200,
        backgroundColor:"#FCFCFC",
        //borderColor:"#000",
        //borderWidth:3,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,
        elevation: 2,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
    },

    sendPostView:{
        flex:0.7,
        backgroundColor:"#FCFCFC",
        zIndex:2,
        width:"100%",
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:"row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,

        elevation: 5,
    },

    avatar1png:{
        width:35,
        height:35,
    },

    sendPostTextInput:{
        width:"68%",
        height:"70%",
        backgroundColor:"#fff",
        borderRadius:10,
        borderColor:"#F0F0F0",
        borderWidth: 1,
        fontSize:15,
    },

    paperPlane:{
        color:"#1A82C4",
    },
});