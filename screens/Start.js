
import * as React from 'react';
import { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Button, Text, Alert, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Start() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>


      <TouchableOpacity style={styles.user} onPress={() => navigation.navigate('User_login')} >
        <Text >Kullanıcı Girişi</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.admin} onPress={() => navigation.navigate('Admin_login')}>
        <Text >Admin Girişi</Text>
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
