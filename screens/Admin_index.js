import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';

export default function Admin_index({ route }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Text>{route.params.content.username}</Text>
      <Text>{route.params.content.password}</Text> */}

      <TouchableOpacity style={styles.rota_yükle} onPress={() => {
        fetch('http://127.0.0.1:1234/api/v1/route', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "Başiskele": 10,
            "Çayırova": 5,
            "Darıca": 20,
            "Derince": 5,
            "Dilovası": 10,
            "Gebze": 5,
            "Gölcük": 5,
            "Kandıra": 5,
            "Karamürsel": 5,
            "Kartepe": 10,
            "Körfez": 5,
            "İzmit": 15
          })
        }).then(response => response.json())
          .then((response) => {
            return response;
          })
      }}>
        <Text>Rotayı Yükle</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rota_ekle} onPress={() => navigation.navigate('Admin_rota_ekle')}>
        <Text >Yeni Rota Ekle</Text>
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


});


