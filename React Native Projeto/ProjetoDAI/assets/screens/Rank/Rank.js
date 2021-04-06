import React from 'react';
import { Text, View, StyleSheet, Animated, ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


export default function Rank() {
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
                    <Text style={styles.rankText}>Rank</Text>
                </View>
                <View style={styles.rankScreenScrollContainer}>
                    <Animated.ScrollView style={styles.rankScreenScroll} scrollEventThrottle={1} onScroll={(e)=>{scrollY.setValue(e.nativeEvent.contentOffset.y); scrollYValue = scrollY._value; scrollYValue > 0 ? setScrolled(true) : setScrolled(false);}}>
                        
                    </Animated.ScrollView>
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
        height:100,
        backgroundColor: '#FCFCFC',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
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
});