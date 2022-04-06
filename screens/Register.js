import * as React from 'react';
import { StyleSheet, TextInput, View, Text, Alert, TouchableOpacity } from 'react-native';

export default function Register() {

  const [post, setPost] = React.useState({
    username: "",
    password: ""
  })

  return (
    <View style={styles.container}>
      <Text>Kayıt Paneli</Text>
      {<TextInput
        style={styles.input}
        value={setPost.username}
        placeholder="Username"
        onChangeText={value => setPost({ ...post, username: value })}
      />}

      <TextInput secureTextEntry={true}
        style={styles.input}
        value={setPost.password}
        placeholder="Password"
        onChangeText={value => setPost({ ...post, password: value })}
      />

      <TouchableOpacity style={styles.registerBtn} onPress={() => Alert.alert("Kayıt Ol tuşuna bastınız.")}>
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
 