import React,{useState} from 'react'
import { Text, View, StyleSheet, Pressable, ScrollView, Dimensions, TouchableOpacity ,SafeAreaView} from "react-native";
import LinearGradient from 'react-native-linear-gradient';


const Sizes = (props) => {

    const [selected, setSelected] = useState(props.sizes[1]);


  return (
    <View style={styles.viewStyle}>
        {props.sizes.map((size,i)=>{
            
            return(
            <Pressable onPress={()=>setSelected(size)} key={i}>
                <LinearGradient  start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={[ '#00E8DB','#5C4CDB']} style={styles.outline}>
                    <View style={[styles.whiteOutline,{ 
                    width:size===selected?67:70,
                    height:size===selected?27:30,
                    }]}>   
                            <Text style={styles.textStyle}>{size}</Text>
                    </View>
                </LinearGradient>
            </Pressable>
            
            )
        })}
    </View>
  )
}

export default Sizes


const styles = StyleSheet.create({
    viewStyle:{
        flexDirection:'row'
    },
    textStyle:{
        fontSize:14,
        fontWeight:'400'
    },
    whiteOutline:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderWidth:.3,
        bordercolor:'#C7C7C5',
        borderRadius:100,
    },
    outline:{
        marginRight:10,
        justifyContent:'center',
        alignItems:'center',
        width:70,
        height:30,
       
        borderRadius:100,
        shadowColor: '#000',  
        elevation: 1,  
    },
})