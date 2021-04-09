import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Animated, ScrollView, Image, FlatList } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faTrophy } from '@fortawesome/free-solid-svg-icons';

export default function Notifications() {
    const [loaded, setLoaded] = useState(false);
    
    //Fetch
    useEffect(() => {
        async function submit() {
            const response = await fetch("http://192.168.1.74:8080/api/preferences/7", {//MUDAR O 7
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            const response_1 = await response.json();
            setLoaded(true);
            /*fetch("http://192.168.1.74:8080/api/preferences/7",{method: 'GET'})
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                if (result.status.response === "success") {
                    setfavoriteList(result);
                    console.log("1")
                };
                console.log(result.data_list);
            })
            .catch(function (error) {
                console.log("-------- error ------- "+error);
                alert("result:"+error)
            });*/
        }
        if(!loaded){
            submit();
            setLoaded(true);
        }
    });

    let [fontsLoaded] = useFonts({
        RedHatDisplay_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return(
            <View style={styles.container}>
                <Text>avhsrvdfgfdsgvwrev</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});