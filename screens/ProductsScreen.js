import React, { useState , useEffect, useContext } from "react";
import { View , StyleSheet,Dimensions, Text, FlatList, Image, TouchableOpacity, SafeAreaView } from "react-native";
import axios from 'axios'; 
import { useRoute } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';

import ProductList from "../components/ProductList";

var { height}= Dimensions.get("window")

 
const ProductsScreen = ({navigation})=>{   

  const route = useRoute();
  const[products, setProducts]=useState('');

  useEffect(()=>{


    axios
        .get(`https://api-dev.yeshtery.com/v1/yeshtery/products`)
        .then((res)=>{
          const yourProduct = res.data.products
          setProducts(yourProduct)
        }).catch((err)=>{
          Toast.show({
            topOffset: 60,
            type: "error",
            text1:"Connection error", 
            text2: "Check your connection "
        })
        })
        
    
    return ()=>{
      setProducts([])
    }
  },[])

  

  return (
    
    <SafeAreaView style={{flex:1,backgroundColor:'#31007e'  }}>

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.list}
        numColumns={1}
        data={products}
        renderItem={({item})=><ProductList 
          key={item.id}
          item={item}
        />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    
  );
}
export default ProductsScreen;

const styles = StyleSheet.create({

  list: {
    borderTopLeftRadius:27,
    borderTopRightRadius:27,
    backgroundColor: '#fff',
  },
  linearGradient: {
    flex: 1,
    backgroundColor:'#31007e'
  },
 
  textMain: {
      color: '#fff',
      fontWeight:"bold",
      fontSize: 22,
      alignSelf:'center',
      paddingBottom: 5,
      paddingHorizontal:10,
      backgroundColor:'transparent',
      borderColor: '#fff',
      borderBottomWidth: 1,
  },
  subText: {
    color: '#fff',
    fontWeight:"bold",
    fontSize: 22,
    alignSelf:'center',
    paddingBottom: 5,
    paddingHorizontal:10,
    backgroundColor:'transparent',
   
},
  button:{
    alignSelf:'center',
    width:'80%',
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    height:55,
    borderRadius:30,
    marginTop:20,
    marginBottom:20
},
buttonText:{
    color:'#1363DF',
    fontSize:20,
    fontWeight:'600'
},
image: {
    marginTop:"30%",
    width: "90%",
    height: "50%",
    alignSelf: 'center',
    resizeMode: "contain"
},
subText: {
 
  color: '#fff',
  fontWeight:"bold",
  fontSize: 40,
  alignSelf:'center',
  paddingBottom: 5,
  paddingHorizontal:10,
  backgroundColor:'transparent',
 
}
})