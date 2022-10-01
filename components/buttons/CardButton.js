import React from 'react'
import {Pressable , View , StyleSheet, Dimensions, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

export const CardButton = (props) => {
  const navigation = useNavigation(); 
  return (
    <Pressable style={styles.buttonStyle} onPress={()=>{props.name=='scan' ? navigation.navigate('Scanner',{id:props.id}) : alert('Pressed')}}>
    {
      props.name=='scan' ? <Image  source={require('../../assets/scan.png')}/> :  <Image  source={require('../../assets/recipt.png')}/>
    }  
            <Text style={styles.textButtonStyle}>{props.number}</Text>
    </Pressable>
   
  )
}

const styles = StyleSheet.create({
    buttonStyle:{
        backgroundColor:'#FAFAFA',
        fontSize: 30,
        fontWeight: 'bold',
        width: 90,
        height: 40,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:10,
        marginRight:8,

    },
    textButtonStyle:{
        fontSize: 16,
        color:'#1F54CF',
        padding:5
    }
  })