import React from 'react'
import {ImageBackground,StyleSheet, View,Image,Text} from "react-native";
function WelcomeScreen(props){
    return(
      <>
        <ImageBackground source={require('../app/assets/bg.jpeg')}
        style={styles.background}
        />
        <View style= {styles.logoContainer}>
        <Image source={require('../app/assets/logo.png')} style={styles.logo}/>
        <Text>Sell Now</Text>
        </View>
<View style={styles.loginButton}/>
<View style={styles.registerButton}/>

</>
    );
}
export default WelcomeScreen;
const styles =StyleSheet.create({
background:{
    flex:1,
    alignItems:'center' 
},
loginButton:{
  width:"100%",
  height:70,
  backgroundColor:"#fc5c65"
},
registerButton:{
  width:"100%",
  height:70,
  backgroundColor:"#4ecddc"
},
logo:{
  width:100,
  height:100,

},logoContainer:{
  position:'absolute',
  height:70,
  alignItems:'center'
}
})
