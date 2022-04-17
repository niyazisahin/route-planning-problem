import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from './screens/Register.js';
import Admin_login from './screens/Admin_login.js';
import Start from './screens/Start.js';
import User_login from './screens/User_login.js';
import Admin_index from './screens/Admin_index.js';
import User_index from './screens/User_index.js';
import Map from './screens/Map.js';
import Admin_rota_ekle from './screens/Admin_rota_ekle.js'
import Admin_istatistik from './screens/Admin_istatistik.js';
import User_transition from './screens/User_transition.js';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'> 
        <Stack.Screen name="Register" options={{ title: "Hoşgeldiniz" }} component={Register} />
        <Stack.Screen name="Admin_login" options={{ title: "Hoşgeldin Admin" }} component={Admin_login} />
        <Stack.Screen name="User_login" options={{ title: "Hoşgeldin Kullanıcı" }} component={User_login} />
        <Stack.Screen name="Start" options={{ title: "Kimsin" }} component={Start} />
        <Stack.Screen name="Admin_index" options={{ title: "Admin Paneli" }} component={Admin_index} />
        <Stack.Screen name="User_index" options={{ title: "Kullanıcı Paneli" }} component={User_index} />
        <Stack.Screen name="Map" component={Map} />      
        <Stack.Screen name="Admin_rota_ekle" component={Admin_rota_ekle} />  
        <Stack.Screen name="Admin_istatistik" component={Admin_istatistik} />  
        <Stack.Screen name="User_transition" component={User_transition} />  
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}