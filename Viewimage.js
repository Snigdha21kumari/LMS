import React from 'react';
import {Image,View, StyleSheet} from "react-native";
function Viewimage (props){
  return(
    <View style={styles.container}> 
    <Image style={styles.image}
    source={require('../app/assets/sofa.jpeg')}/>
    </View>)
}
export default Viewimage;
const styles= StyleSheet.create({
  image:{
    width:"100%",
    height:"100%"
  }, container:{
    flex:1
  }
})
