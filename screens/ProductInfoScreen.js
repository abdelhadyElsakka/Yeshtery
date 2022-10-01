import React,{ useState , useEffect , useContext} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, TouchableHighlight  ,SafeAreaView, Pressable, } from "react-native";
import { useRoute } from '@react-navigation/native';
import axios from 'axios'; 
import {GradientButton} from '../components/buttons/GradientButton'
import Colors from '../components/Colors';
import Sizes from '../components/Sizes';
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ImageSlider } from "react-native-image-slider-banner";

var { width, height}= Dimensions.get("window")

const ProductInfoScreen = () => {


    const route =useRoute();

    const[product, setProduct]=useState({});

    const[pressed,setPressed]=useState(false);

    const[visible,setVisible]=useState(false)

  useEffect(()=>{
    {route.params.scanned && (setVisible(route.params.scanned),setPressed(route.params.scanned)) }
    
    axios
        .get(`https://api-dev.yeshtery.com/v1/yeshtery/product?product_id=${route.params.id}`)
        .then((res)=>{
            setProduct(res.data);
            
        }).catch((err)=>{
            console.log(err)
        })
    
    return ()=>{
      
    }
  },[route.params.scanned])



    return (
       
        <SafeAreaView  style={styles.styleView}>
            <ScrollView>
            {
                visible 
                ?
                <Pressable style={styles.overlayStyle} onPress={()=>{setVisible(false)}}>
                <MaterialCommunityIcons name='star-four-points' size={34} color='#0255CC'  style={{marginTop:(height/2-120), marginLeft:260}}/>
                <MaterialCommunityIcons name='star-four-points' size={30} color='#fff'  style={{ marginLeft:80}}/>
                <MaterialCommunityIcons name='star-four-points' size={20} color='#fff' style={{marginTop:40, marginLeft:280}}/>
                <MaterialCommunityIcons name='star-four-points' size={20} color='#fff' style={{ marginLeft:90}}/>
                <MaterialCommunityIcons name='star-four-points' size={34} color='#5A5E6A' style={{ marginLeft:240}}/>
                <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}}  colors={[ '#00E8DB','#5C4CDB']} style={styles.circlePoints}>
                <Text style={styles.pointsText}>120</Text>
                <Text style={styles.pointsSubText}>points</Text>
                </LinearGradient>
                </Pressable>
                :
                <></>
            }
            
            
            
            <View  style={styles.infoCardStyle} >
                    {/* <Image
                        resizeMode='contain'
                        source={require('../assets/sampleLarge.png')}
                        style={[styles.image]} /> */}
                    
                    <ImageSlider 
                    data={[
                    {img: 'https://res.cloudinary.com/dqaitcomn/image/upload/v1664636212/yeshtery/sampleLarge_cdjcjf.png'},
                    {img: 'https://res.cloudinary.com/dqaitcomn/image/upload/v1664636212/yeshtery/sampleLarge_cdjcjf.png'},
                    {img: 'https://res.cloudinary.com/dqaitcomn/image/upload/v1664636212/yeshtery/sampleLarge_cdjcjf.png'},
                    {img: 'https://res.cloudinary.com/dqaitcomn/image/upload/v1664636212/yeshtery/sampleLarge_cdjcjf.png'}
                    ]}
                    autoPlay={true}
                    closeIconColor="#fff"
                    caroselImageStyle={{ resizeMode: 'contain',width:width-60, marginHorizontal:30, marginBottom:30, alignSelf:'center' }}
                    inActiveIndicatorStyle={{height:6, width:6}}
                    activeIndicatorStyle={{backgroundColor:'#1F54CF'}}
                    />
                   
                    <View style={styles.data}>
                        <Text style={styles.nameStyle}> {product.name}</Text>
                        <Text style={styles.priceStyle}>( {product.price +' '+ 'EGP'} )</Text>
                    </View>
                    <View style={styles.data}>
                        <Text></Text>
                        <Text style={styles.linedText}> {product.price+product.discount +' '+ 'EGP'} </Text>
                    </View>
                    <View style={[styles.data,{marginTop:24}]}>
                        <Text style={styles.discountStyle}>{product.description}</Text>
                    </View>
                    <View style={[styles.data,{marginTop:20}]}>
                        <Text style={styles.subTitleStyle}>color</Text>
                    </View>
                    <View style={[styles.data,{marginTop:10}]}>
                        <Colors colors={['#830B14','#000000', '#0052D3', '#FCBC04']}></Colors>
                    </View>
                    <View style={[styles.data,{marginTop:20}]}>
                        <Text style={styles.subTitleStyle}>size</Text>
                    </View>
                    <View style={[styles.data,{marginTop:10}]}>
                        <Sizes sizes={['S','M','L']}></Sizes>
                    </View>
                    
                   <View style={{marginTop:40}}>
                    <View style={styles.data}>
                        
                        <View style={styles.bottomButtons}>
                        <View style={{flexDirection:'row'}}>
                             <View style={styles.bottomButtonsIcon}>
                            <Image  resizeMode='cover' source={require('../assets/scan.png')} style={{
                            width: 35,
                            height: 35,
                            resizeMode: "contain",
                            }}></Image>
                            </View>
                            <View style={styles.bottomButtonsText}>
                                <Text style={styles.bottomButtonsTextTitle}>Scan</Text>
                                <Text style={styles.bottomButtonsTextDescription}>& get 100 points</Text>
                        </View>
                        </View>
                        <GradientButton name='Scan' id={route.params.id} pressed={route.params.scanned}></GradientButton>
                    </View>
                    </View>
                    <View style={styles.data}>
                        
                        <View style={[styles.bottomButtons,{marginTop:10}]}>
                        <View style={{flexDirection:'row'}}>
                             <View style={styles.bottomButtonsIcon}>
                            <Image resizeMode='contain'  source={require('../assets/recipt.png')} style={{
                            width: 35,
                            height: 35,
                            resizeMode: "contain",
                            }}></Image>
                            </View>
                            <View style={styles.bottomButtonsText}>
                                <Text style={styles.bottomButtonsTextTitle}>Buy & Submit</Text>
                                <Text style={styles.bottomButtonsTextDescription}>the receipt for 120 points</Text>
                        </View>
                        </View>
                           
                        <GradientButton name='Add To Cart'></GradientButton>
                    </View>
                    </View>
                    
    
                    </View>
                    </View>
                    
            
            
            </ScrollView>
            </SafeAreaView>
        );
    }

    

const styles = StyleSheet.create({
    nameStyle: {
        color: '#090A0A',
        fontWeight:'400',
        fontSize: 16,
    },
    priceStyle: {
        color: '#1F54CF',
        fontWeight:'500',
        fontSize: 16,
    },
    discountStyle: {
        color: '#9C9C9C',
        fontWeight:'400',
        fontSize: 14,
    },
    descStyle: {
        color: '#090A0A',
        opacity:.6,
        fontWeight:'400',
        fontSize: 16,
    },
    subTitleStyle: {
        color: '#1F54CF',
        fontWeight:'500',
        fontSize: 16,
    },
    styleView: {
        flex: 1,
        backgroundColor:'#31007e'
      },

   
    bottomButtons:{
        flex:1,
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:15,    
        justifyContent:'space-between'
    },
    bottomButtonsIcon:{
        height:'100%',
        paddingVertical:2,
        borderRadius:10,
        marginRight:15,
    },
    bottomButtonsText:{
        flexDirection:'column'
    },
    bottomButtonsTextTitle:{
        color:'#0255CC',
        fontSize:14,
        fontWeight:'500',
    },
    bottomButtonsTextDescription:{
        color:'#000',
        fontSize:14,
    },
      
    infoCardStyle: {
        backgroundColor:'#fff',
        width:'100%',
        flex: 1,
        borderTopLeftRadius:27,
        borderTopRightRadius:27,
        height:'100%',
        alignSelf: 'center',

      },
      
    
    image: {
        marginTop:30,
        borderRadius: 20,
        alignSelf: 'center',
    },
    data: {
        alignSelf:'center',
        width: '84%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: '#000',
        fontSize: 18,
    },

    linedText:{
        textDecorationLine: 'line-through'

    },
   
    overlayStyle:{
        width:'100%', 
        height:'100%', 
        backgroundColor:'rgba(0, 0, 0, .5)',  
        position:'absolute', 
        zIndex:3000
    },

    circlePoints:{
        justifyContent:'center',
        borderRadius: 100, 
        width:160, 
        height:160, 
        backgroundColor:'#000', 
        position:'absolute', 
        top:(height/2-120), 
        left:(width/2-80) , 
        zIndex:5000, borderWidth:15, 
        borderColor:'rgba(0, 0, 0, .3)'
    },

    pointsText:{
        alignSelf:'center',
        color:'#fff',
        fontWeight:'800',
        fontSize:40,
    },
    pointsSubText:{
        alignSelf:'center',
        color:'#fff',
        fontWeight:'400',
        fontSize:20,
    },



})

export default ProductInfoScreen;