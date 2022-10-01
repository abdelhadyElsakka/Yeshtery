import React, { useState , useEffect, useContext } from "react";
import {Pressable , View , StyleSheet, Dimensions, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { CardButton } from "./buttons/CardButton";


var {width, height}= Dimensions.get("window")


const Card = (props)=>{   

    const navigation = useNavigation(); 

    const itemData = props;

    
    const {id, name , price }=props;
    


  return(
    <Pressable  onPress={() => navigation.navigate('ProductInfo',{id:id,scanned:false})}>
    <View style={styles.viewStyle}>
   
    <View style={styles.container}>
   <View style={styles.imageContainer}>
        <Image 
        style={styles.image} 
        source={require('../assets/sample.png')}
        />
        
    </View>
    
    <View style={styles.infoContainer}>
        <View style={{flexDirection: 'row', flexShrink:1}}>
            <Text style={styles.title}>
            {name}
            </Text>
        </View>   
       
        <View style={styles.buttonsContainer}>
            <CardButton name='scan' number='120' id={id}></CardButton>
            <CardButton name='recipt' number={price}></CardButton>
        </View>
        </View>
        </View>
    </View>
    </Pressable>
  )
}
export default Card;


const styles = StyleSheet.create({
    

    viewStyle:{
        height:height/5,
    },
    container:{
        marginHorizontal:20,
        marginVertical:10,
        borderRadius: 10,
        flex:1,
        flexDirection:'row',
        backgroundColor:'#fff',
        alignItems: 'center',
        shadowColor: '#0268D3',  
        elevation: 4,  
        
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    imageContainer:{
        width: 110,
        height: 110,
        borderRadius: 8,
        alignItems:'center',
        marginLeft:10
    },
    infoContainer:{
        width: '100%',
       
        
    },

   
    image:{
        width:'100%',
        height: '100%',
        backgroundColor: '#fff',
        borderRadius:8,
       
    },
   
    title:{
        fontSize:16,
        textAlign:"left",
        fontWeight:"400",
        color:"#090A0A",
        flex:.6,
        paddingBottom:10
    },
    
})