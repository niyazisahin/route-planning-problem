import * as React from 'react';
import { StyleSheet, TextInput, View, Text, Alert, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Register() {

  const navigation = useNavigation();

  const [post, setPost] = React.useState({
    first_name: "",
    surname: "",
    username: "",
    password: ""
  })

  return (
    <View style={styles.container}>
      <Text>Kayıt Paneli</Text>
      <TextInput
        style={styles.input}
        value={setPost.first_name}
        placeholder="Name"
        onChangeText={value => setPost({ ...post, first_name: value })}
      />

      <TextInput
        style={styles.input}
        value={setPost.surname}
        placeholder="Surname"
        onChangeText={value => setPost({ ...post, surname: value })}
      />

      <TextInput
        style={styles.input}
        value={setPost.username}
        placeholder="Username"
        onChangeText={value => setPost({ ...post, username: value })}
      />

      <TextInput secureTextEntry={true}
        style={styles.input}
        value={setPost.password}
        placeholder="Password"
        onChangeText={value => setPost({ ...post, password: value })}
      />

      <TouchableOpacity style={styles.loginBtn} onPress={() => {
        fetch('http://127.0.0.1:5000/api/v2/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "name": post.first_name,
            "surname": post.surname,
            "username": post.username,
            "password": post.password
          })
        }).then(response => {
          response.text().then(function (text) {
            alert("Giriş Sayfasına Yönlendiriliyorsunuz")
            if (text == "True") {
              navigation.navigate("User_login", { content: post })
            }
          })



        })
      }}>
        <Text >Kayıt Ol</Text>
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

  input: {
    borderWidth: 2,
    margin: 12,
    padding: 15,
    width: 300,
    height: 60,
    textAlign: "left",
    borderRadius: 25
  },
  loginBtn: {
    width: "50%",
    backgroundColor: "#26E1ED",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  registerBtn: {
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

