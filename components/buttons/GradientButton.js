import React, { useState, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {Pressable , View , StyleSheet, Dimensions, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';



export const GradientButton = (props) => {


  const navigation = useNavigation(); 
 
  const [pressed,setPressed]=useState(false)

  useEffect(()=>{
      setPressed(props.pressed)
  },[props.pressed])
 
  return (
    <Pressable style={styles.buttonStyle} disabled={pressed} onPress={()=>{props.name=='Scan' ? navigation.navigate('Scanner',{id:props.id}) : setPressed(true)}}>
        {
          pressed ?  
          <View  style={styles.buttonDoneStyle}>
            <Text style={styles.textButtonDoneStyle}>Done</Text>
        </View> 
        :
        <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}}  colors={[ '#00E8DB','#5C4CDB']} style={{flex:1,  justifyContent:'center',borderRadius: 8}}>
            <Text style={styles.textButtonStyle}>{props.name}</Text>
        </LinearGradient>
        }
    </Pressable>
   
  )
}

const styles = StyleSheet.create({
    buttonStyle:{
      width: 100,
      height: 40,

    },

    buttonDoneStyle:{
      flex:1,  justifyContent:'center',borderRadius: 8,
      backgroundColor:'#F5F7FE'
    },
    
    textButtonStyle:{
        fontSize: 14,
        color:'#fff',
        alignSelf:'center'
    },
    textButtonDoneStyle:{
      fontSize: 14,
      color:'#4CD964',
      alignSelf:'center'
  }
  })