import React, {useState, useEffect} from 'react';
import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { Animated, StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowCircleRight, faChevronLeft, faComments } from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HomeWithoutLogin({ navigation }){
  const scrollY= new Animated.Value(0);
  let scrollYValue = scrollY._value;
  const [scrolled, setScrolled] = useState(false);


  let [fontsLoaded] = useFonts({
    RedHatDisplay_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        {/*<StatusBar style="auto" />*/}
        <View style={scrolled ? styles.topNavbarScrolled : styles.topNavbar}>
          <FontAwesomeIcon icon={faChevronLeft} onPress={() => navigation.navigate('Login')} style={styles.chevronLeft}/>
          <Image source={require("../../LOGOPNG.png")} style={styles.logoPng}/>
        </View>
        <Text style={styles.forumText}>Fórum</Text>
        <TouchableOpacity style={styles.forumIconContainer}>
          <FontAwesomeIcon icon={faComments} onPress={() => navigation.navigate('Login')} size={25} style={styles.commentsIcon}/>
        </TouchableOpacity>
        <Text style={styles.activitiesOfTheWeek}>Atividades desta semana</Text>
        <ScrollView style={styles.activitiesScrollView}>
          <View style={styles.activitiesContainer}>
            <View style={styles.sportView}>
              <Image source={require("../../sports.png")} style={styles.sportsPng}/>
                <Text>AAAAAAAAAAAAAAAAAAA</Text>
            </View>
          </View>
        </ScrollView>
        <ScrollView style={styles.activitiesScrollView}>

        </ScrollView>
        <TouchableHighlight onPress={() => navigation.navigate('OpenScreen')} underlayColor={"rgba(15, 122, 190, 0.8)"} style={styles.buttonLogin}>
          <View style={styles.buttonLoginWithAccountView}>
            <Text style={styles.textButtonLoginWithAccount}>Entrar com uma conta </Text>
            <FontAwesomeIcon icon={faArrowCircleRight} style={styles.arrowIconButtonLoginWithAccount} size={30}/>
          </View>
        </TouchableHighlight>
      </View>
    );
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
    flex: 1.5,
    width:"100%",
    backgroundColor: '#FCFCFC',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:2,
  },

  chevronLeft:{
    position:'absolute',
    bottom:17,
    left:'3%',
    color:"#B0B0B0",
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

  buttonLogin:{
    alignItems: 'center',
    flexDirection: "row",
    backgroundColor: 'rgba(26, 130, 196, 0.8)',
    maxWidth: 370,
    width:"89%",
    height: "9%",
    borderRadius: 50,
    position:"absolute",
    bottom:"3%"
  },
  
  textButtonLoginWithAccount:{
    color: "white",
    fontSize: 22,
    fontFamily:'RedHatDisplay_400Regular',
    marginLeft:"15%",
    width:275
  },
  
  arrowIconButtonLoginWithAccount:{
    color: "white",
    marginLeft:"-15%",
  },
  
  buttonLoginWithAccountView:{
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent:'center'
  },

  logoPng:{
    width:300,
    height:150,
    position:"absolute",
    bottom:-50,
  },

  activitiesOfTheWeek:{
    fontFamily:'RedHatDisplay_400Regular',
    fontSize:31,
    color:'#1A82C4'
  },

  forumText:{
    fontFamily:'RedHatDisplay_400Regular',
    fontSize:32,
    color:'#1A82C4'
  },

  forumIconContainer:{
    width:80,
    height:80,
    borderRadius:50,
    alignItems: 'center', 
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1.5,
    margin:10,
    backgroundColor:"#fff",
  },

  commentsIcon:{
    color:"#1A82C4",
  },

  //Activities
  activitiesScrollView:{
    height:100,
    width:"100%",
    maxWidth:414,
  },
  activitiesContainer:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
  },

  //Sport
  sportView:{
    width:"92%",
    maxWidth:414,
    height:80,
    backgroundColor:"#FFFFFF",
    borderRadius:50,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'flex-start',
  },
  sportsPng:{
    width:60,
    height:60,
    marginLeft:10,
  },
});