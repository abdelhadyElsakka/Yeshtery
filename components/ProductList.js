import React from "react";
import { View } from "react-native";
import Card from "./Card";


const ProductList = (props)=>{   
    const {item}= props;
  return(
        <View>
            <Card {...item}/>  
        </View>
    
  )
}
export default ProductList;