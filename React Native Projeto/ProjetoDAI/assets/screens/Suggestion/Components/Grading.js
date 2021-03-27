import React, { useState } from "react";
import { Button, Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faFrown, faSmile, faMeh } from '@fortawesome/free-solid-svg-icons';


{/*export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstButtonEnable: false,
            secondButtonEnable: false,
            thirdButtonEnable: false,
        }
        this.handlingButton = this.handlingButton.bind(this)
    }

    handlingButton(){
        firstButtonEnable
        ?  this.setState({secondButtonEnable:false},{thirdButtonEnable:false})
        : null;
    }
    render() {
        return (
            <View style={styles.gradeView}>
                <FontAwesomeIcon icon={faSmile} style={styles.smileFaceIcon} onPress={()=>{this.setState({firstButtonEnable:true});handlingButton();}} size={60}/>
                <FontAwesomeIcon icon={faMeh} style={styles.mehFaceIcon} size={60}/>
                <FontAwesomeIcon icon={faFrown} style={styles.sadFaceIcon} size={60}/>
            </View>
        );
    }
}*/}
export default function Grading() {
    const [faSmileEnabled, setfaSmileEnabled] = useState(false);
    const [faMehEnabled, setfaMehEnabled] = useState(false);
    const [faFrownEnabled, setfaFrownEnabled] = useState(false);
    const handlefaSmilePressed = () => {
        setfaSmileEnabled(true);
        setfaMehEnabled(false);
        setfaFrownEnabled(false);
        console.log(faSmileEnabled);
    };
    const handlefaMehPressed = () => {
        setfaSmileEnabled(false);
        setfaMehEnabled(true);
        setfaFrownEnabled(false);
        console.log(faSmileEnabled);
    };
    const handlefaFrownPressed = () => {
        setfaSmileEnabled(false);
        setfaMehEnabled(false);
        setfaFrownEnabled(true);
        console.log(faSmileEnabled);
    };

    return (
        <View style={styles.gradeView}>
            <FontAwesomeIcon icon={faFrown} onPress={handlefaFrownPressed} style={faFrownEnabled ? styles.sadFaceIconClicked : styles.sadFaceIcon} size={60}/>
            <FontAwesomeIcon icon={faMeh} onPress={handlefaMehPressed} style={faMehEnabled ? styles.mehFaceIconClicked : styles.mehFaceIcon} size={60}/>
            <FontAwesomeIcon icon={faSmile} onPress={handlefaSmilePressed} style={faSmileEnabled ? styles.smileFaceIconClicked : styles.smileFaceIcon} size={60}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    topNavbar: {
        flex: 1,
        width:"100%",
        height:100,
        backgroundColor: '#fff',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    notificationText:{
        position:'absolute',
        bottom:"0%",
        fontSize:36,
        color:"#1A82C4",
        fontFamily:'RedHatDisplay_400Regular',
    },

    chevronLeft:{
        position:'absolute',
        bottom:17,
        left:'4.83%',
        color:"#B0B0B0",
    },

    notificationScreen:{
        flex: 5,
        width:"100%",
        backgroundColor:"#aaa",
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20,
    },

    howYouClassifyText:{
        color:"#1A82C4",
        fontSize:18,
        fontFamily:'RedHatDisplay_400Regular',
    },

    gradeView:{
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
    },

    smileFaceIcon:{
        margin:5,
        color:"#5F5F5F",
    },
    smileFaceIconClicked:{
        margin:5,
        color:"#1A82C4",
    },

    mehFaceIcon:{
        margin:5,
        color:"#5F5F5F",
    },
    mehFaceIconClicked:{
        margin:5,
        color:"#1A82C4",
    },

    sadFaceIcon:{
        margin:5,
        color:"#5F5F5F",
    },
    sadFaceIconClicked:{
        margin:5,
        color:"#1A82C4",
    },
});