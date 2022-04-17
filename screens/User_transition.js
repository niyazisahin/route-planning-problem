/* import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native'
import { useEffect, useState, TouchableOpacity,  } from "react";



import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function User_transition() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);

  return (
    <View>
       <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
          <TouchableOpacity style={styles.user} onPress={() => navigation.navigate('User_login')} >
        <Text >Kullanıcı Girişi</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.admin} onPress={() => navigation.navigate('Admin_login')}>
        <Text >Admin Girişi</Text>
      </TouchableOpacity>
    </View>
  )
}  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 16
    },
  
    user: {
      width: "50%",
      backgroundColor: "#26E1ED",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      marginBottom: 10
    },
    admin: {
      width: "50%",
      backgroundColor: "#fb5b5a",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      marginBottom: 10
    },
  
  
  });



 */


import * as React from 'react';
import { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Button, Text, Alert, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { useNavigation } from '@react-navigation/native';

export default function Start({ route }) {
    
    const navigation = useNavigation();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Çayırova', value: 'Çayırova'},
      {label: 'Gebze', value: 'Gebze'},
      {label: 'Darıca', value: 'Darıca'},
      {label: 'Körfez', value: 'Körfez'},
      {label: 'İzmit', value: 'İzmit'},
      {label: 'Gölcük', value: 'Gölcük'},
      {label: 'Başiskele', value: 'Başiskele'},
      {label: 'Kandıra', value: 'Kandıra'},
      {label: 'Derince', value: 'Derince'},
      {label: 'Karamürsel', value: 'Karamürsel'},
      {label: 'Dilovası', value: 'Dilovası'},
      {label: 'Kartepe', value: 'Kartepe'}
    ]);

  return (
    <View style={styles.container}>
<DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />

      <TouchableOpacity style={styles.user} onPress={() =>{
          if(value == null){
              alert("Seçim Boş olamaz")
          }
          else{
            fetch('http://127.0.0.1:5000/api/v8/', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  "username": route.params.content.username,
                  "loc": value
                })
              }).then(response => {
                response.text().then(function (text) { alert(text) 
                  if(text == "True"){
                    
                    alert("İşlem Başarılı")
                  } })
                
                
                
              })
          }
      } } >
        <Text >{route.params.content.username}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.admin} onPress={() => navigation.navigate('User_index')}>
        <Text >Harita</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16
  },

  user: {
    width: "50%",
    backgroundColor: "#26E1ED",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  admin: {
    width: "50%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },


});
