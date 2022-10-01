import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  BackHandler
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsScreen from './screens/ProductsScreen';
import ProductInfoScreen from './screens/ProductInfoScreen';
import ScannerScreen from './screens/ScannerScreen';

const Stack = createNativeStackNavigator();
  
function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" options={{
          headerBackground: () => (
              <Image
              style={styles.absoluteFill}
              source={require('./assets/backgroundVector.png')} resizeMode='cover'
              />
              ),
              title: "Scan Products",
              headerTitleAlign: 'left',
              headerTintColor: "#fff",
              headerLeft: () => (
              <Pressable onPress={() => BackHandler.exitApp()}>
                <MaterialIcons name='arrow-back-ios' size={18} color='#fff' style={{marginRight:35}}/>
              </Pressable>
              ),
              headerRight: () => (
            <Pressable onPress={() => alert('This is a button!')}>
              <MaterialIcons name='shopping-bag' size={18} color='#fff' />
            </Pressable>
            ),
            }} component={ProductsScreen} />
        <Stack.Screen name="ProductInfo"  options={{
          headerBackground: () => (
              <Image
              style={styles.absoluteFill}
              source={require('./assets/backgroundVector.png')} resizeMode='cover'
              />
              ),
              title: "Products Details",
              headerTitleAlign: 'left',
              headerTintColor: "#fff",
              
              headerRight: () => (
            <Pressable onPress={() => alert('Cart')}>
              <MaterialIcons name='shopping-bag' size={18} color='#fff' />
            </Pressable>
          ),
            }} component={ProductInfoScreen} />

        <Stack.Screen name="Scanner"  options={{
              title: "Scan code",
              headerTitleAlign: 'left',
              headerTintColor: "#000",
              headerShadowVisible:false,
              headerStyle: {
                backgroundColor: '#D3D3D3',
              },
            }} component={ScannerScreen} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



const styles = StyleSheet.create({
   
  absoluteFill: {
   flex:1,
   width:'115%',
   backgroundColor:"#31007e",
   borderRadius:-10
  },

  


})