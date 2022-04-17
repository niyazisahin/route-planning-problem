import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';

export default function Admin_index({ route }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Text>{route.params.content.username}</Text>
      <Text>{route.params.content.password}</Text> */}
      
      
      <TouchableOpacity style={styles.rota_yükle}  onPress={async() => {
        
        fetch('http://127.0.0.1:1234/api/v1/route', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: await fetch('http://127.0.0.1:5000/api/v7').then(response=> response.json()).then(data => {
          alert(JSON.stringify(data))  
          return JSON.stringify(data);
          })
        }).then(response => response.json())
          .then(data => {

            alert(JSON.stringify(data))
  
            fetch('http://127.0.0.1:5000/api/v4/', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          })
            
      }}>
        <Text>Rotayı Yükle</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rota_ekle} onPress={() => navigation.navigate('Admin_rota_ekle')}>
        <Text >Yeni Rota Ekle</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.istatistik} onPress={() => navigation.navigate('Admin_istatistik')}>
        <Text >İstatistikler</Text>
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

  input: {
    borderWidth: 2,
    margin: 12,
    padding: 15,
    width: 300,
    height: 60,
    textAlign: "left",
    borderRadius: 25
  },
  rota_yükle: {
    width: "50%",
    backgroundColor: "#26E1ED",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  rota_ekle: {
    width: "50%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  istatistik: {
    width: "50%",
    backgroundColor: "#ff8c1a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  }


});


