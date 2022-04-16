import * as React from 'react';
import { StyleSheet, TextInput, View, Text, Alert, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Admin_rota_ekle() {

    const navigation = useNavigation();

    const [post, setPost] = React.useState({
        cayirova: "",
        gebze: "",
        darica: "",
        korfez: "",
        derince: "",
        kandira: "",
        karamursel: "",
        golcuk: "",
        izmit: "",
        kartepe: "",
        basiskele: "",
        dilovasi: ""
    })

    return (
        <View style={styles.container}>

            
            <Text>Yeni Rota Ekle</Text>
            <TextInput
                style={styles.input}
                value={setPost.cayirova}
                keyboardType='numeric'
                placeholder="asdasd"
                onChangeText={value => setPost({ ...post, cayirova: value })}
            />

            <TextInput
                style={styles.input}
                value={setPost.gebze}
                placeholder=""
                onChangeText={value => setPost({ ...post, gebze: value })}
            />

            <TextInput
                style={styles.input}
                value={setPost.darica}
                placeholder=""
                onChangeText={value => setPost({ ...post, darica: value })}
            />

            <TextInput
                style={styles.input}
                value={setPost.korfez}
                placeholder=""
                onChangeText={value => setPost({ ...post, korfez: value })}
            />
            <TextInput
                style={styles.input}
                value={setPost.derince}
                placeholder=""
                onChangeText={value => setPost({ ...post, derince: value })}
            />

            <TextInput
                style={styles.input}
                value={setPost.kandira}
                placeholder=""
                onChangeText={value => setPost({ ...post, kandira: value })}
            />

            <TextInput
                style={styles.input}
                value={setPost.karamursel}
                placeholder=""
                onChangeText={value => setPost({ ...post, karamursel: value })}
            />

            <TextInput
                style={styles.input}
                value={setPost.golcuk}
                placeholder=""
                onChangeText={value => setPost({ ...post, golcuk: value })}
            />
            <TextInput
                style={styles.input}
                value={setPost.izmit}
                placeholder=""
                onChangeText={value => setPost({ ...post, izmit: value })}
            />

            <TextInput
                style={styles.input}
                value={setPost.basiskele}
                placeholder=""
                onChangeText={value => setPost({ ...post, basiskele: value })}
            />

            <TextInput
                style={styles.input}
                value={setPost.kartepe}
                placeholder=""
                onChangeText={value => setPost({ ...post, karamursel: value })}
            />

            <TextInput
                style={styles.input}
                value={setPost.dilovasi}
                placeholder=""
                onChangeText={value => setPost({ ...post, dilovasi: value })}
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
        margin: 7,
        padding: 15,
        width: 200,
        height: 10,
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

