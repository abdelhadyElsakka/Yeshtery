import React,{useState} from 'react'
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity ,SafeAreaView, Pressable} from "react-native";
import LinearGradient from 'react-native-linear-gradient';


const Colors = (props) => {

    
    const [selected, setSelected] = useState(props.colors[0]);
    
    
  return (
    <View style={styles.viewStyle}>
        {props.colors.map((color,i)=>{
            return(
                <Pressable onPress={()=>setSelected(color)} key={i}>
                <LinearGradient  start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={[ '#00E8DB','#5C4CDB']} style={styles.outline}>
                
                    <View style={[styles.colorStyle,{ 
                    width:color===selected?27:30,
                    height:color===selected?27:30,
                    backgroundColor:color,
                    }]}>
                    </View>
                </LinearGradient>
          
                </Pressable>
            )
        })}
    </View>
  )
}

export default Colors


const styles = StyleSheet.create({
    viewStyle:{
        flexDirection:'row'
    },
    colorStyle:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:80,
        borderWidth:2,
        borderColor:'#fff'
    },
    outline:{
        marginRight:10,
        justifyContent:'center',
        alignItems:'center',
        width:30,
        height:30,
        backgroundColor:'gray',
        borderRadius:80,
        shadowColor: '#000',  
        elevation: 1,  
    },
})