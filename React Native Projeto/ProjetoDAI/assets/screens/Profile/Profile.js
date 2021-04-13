import React, {useState, useEffect} from 'react';
import { Animated, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, FlatList } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faTrophy, faPen } from '@fortawesome/free-solid-svg-icons';

export default function Notifications() {
    const scrollY= new Animated.Value(0);
    let scrollYValue = scrollY._value;
    const [scrolled, setScrolled] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [profileData, setProfileData] = useState(null);
    
    //Fetch
    useEffect(() => {
        async function submit() {
            const response = await fetch("http://192.168.1.74:8080/api/children/8", {//MUDAR O 8
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            const response_1 = await response.json();
            setProfileData([response_1]);
            console.log(profileData);
        }
        if(!loaded){
            submit();
            setLoaded(true);
            console.log(profileData);
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
                    <Text style={styles.profileText} onPress={console.log(profileData)}>Perfil</Text>
                </View>
                <View style={styles.profileScreen}>
                    <FlatList data={profileData} 
                        renderItem={({ item}) => {
                            return(
                                <View style={styles.profileScreenFlatListContainer}>
                                    <View style={styles.childProfileContainer}>
                                        <View style={styles.avatarContainer}>
                                            <Image source={require("../../avatar1.png")} style={styles.avatar}/>
                                            <FontAwesomeIcon icon={faPen} onPress={() => navigation.navigate('HomeMenu')} style={styles.faPen} size={30}/>
                                        </View>
                                    </View>
                                    <View style={styles.dataProfileContainer}>
                                        <View style={styles.dataTextContainer}>
                                            <Text style={styles.dataBasicTextMargin}>E-mail</Text>
                                                <View style={styles.dataText}>
                                                    <Text style={styles.dataTextMargin}>{item.login.email}</Text>
                                                </View>
                                        </View>
                                        <View style={styles.dataTextContainer}>
                                            <Text style={styles.dataBasicTextMargin}>Nome Completo</Text>
                                            <View style={styles.dataText}>
                                                <Text style={styles.dataTextMargin}>{item.name}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.dataTextContainer}>
                                            <Text style={styles.dataBasicTextMargin}>Password</Text>
                                            <View style={styles.dataText}>
                                                <Text style={styles.dataTextMargin}>************</Text>
                                            </View>
                                        </View>
                                        <View style={styles.dataTextContainer}>
                                            <Text style={styles.dataBasicTextMargin}>Contacto</Text>
                                            <View style={styles.dataText}>
                                                <Text style={styles.dataTextMargin}>Não dá pra ja</Text>
                                            </View>
                                        </View>
                                        <View style={styles.dataTextContainer}>
                                            <Text style={styles.dataBasicTextMargin}>Câmara Municipal</Text>
                                            <View style={styles.dataText}>
                                                <Text style={styles.dataTextMargin}>{item.address}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.dataTextContainer}>
                                            <Text style={styles.dataBasicTextMargin}>Idade</Text>
                                            <View style={styles.dataText}>
                                                <Text style={styles.dataTextMargin}>{item.age}</Text>
                                            </View>
                                        </View>
                                        <Text style={styles.logout}>Terminar Sessão</Text>
                                    </View>
                                </View>
                            )
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        style={styles.profileScreenScroll}
                    />
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

    //Profile
    profileScreen:{
        flex: 5,
        maxWidth:414,
        width:"100%",
        backgroundColor: '#FCFCFC',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: "column",
    },

    profileScreenFlatListContainer:{
        flex:1,
        width:"100%",
        alignItems: 'center',
    },
    
    profileScreenScroll:{
        flex: 1,
        width:"100%",
    },

    childProfileContainer:{
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'column',
    },

    avatarContainer:{
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row',
    },

    avatar:{
        width:100,
        height:100,
        marginLeft:40,
    },

    faPen:{
        color:"#1A82C4",
        marginLeft:10,
    },

    //Data
    dataProfileContainer:{
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'column',
        width:"90%",
    },

    dataTextContainer:{
        maxWidth:414,
        width:"90%",
        marginBottom:5,
    },

    dataText:{
        height:49,
        backgroundColor:"#FAFAFA",
        alignItems:"center",
        justifyContent:"flex-start",
        flexDirection:'row',
        borderRadius:50,
        borderColor:"#EBEBEB",
        borderWidth:1,
    },
    
    dataBasicTextMargin:{
        marginLeft:10,
        color:"#1A82C4",
        fontSize:22,
        fontFamily:"RedHatDisplay_400Regular",
    },

    dataTextMargin:{
        marginLeft:10,
        color:"#B4B4B4",
        fontSize:20,
        fontFamily:"RedHatDisplay_400Regular",
    },

    logout:{
        color:"#FE6C6C",
        marginTop:5,
        fontSize:24,
    },
});