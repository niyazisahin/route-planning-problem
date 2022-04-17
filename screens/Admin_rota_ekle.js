import * as React from 'react';
import { StyleSheet, TextInput, View, Text, Alert, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input'

export default function Admin_rota_ekle() {

    const navigation = useNavigation();

    const [post, setPost] = React.useState({
        dict : {
            "cayirova": 0,
            "gebze": 0,
            "darica": 0,
            "korfez": 0,
            "derince": 0,
            "kandira": 0,
            "karamursel": 0,
            "golcuk": 0,
            "izmit": 0,
            "kartepe": 0,
            "basiskele": 0,
            "dilovasi": 0
        }
    })

    return (
        <View style={styles.container}>

            <Text>Çayırova</Text>
            <NumericInput
                onChange={value => setPost({ ...post,})}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={200}
                totalHeight={30}
                iconSize={25}
                step={1}
                valueType='real'
                rounded
                textColor='#B0228C'
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#fb5b5a'
                leftButtonBackgroundColor='#26E1ED' />

            <Text>Gebze</Text>
            <NumericInput
                onChange={value => setPost({ ...post,})}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={200}
                totalHeight={30}
                iconSize={25}
                step={1}
                valueType='real'
                rounded
                textColor='#B0228C'
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#fb5b5a'
                leftButtonBackgroundColor='#26E1ED' />
            <Text>Darıca</Text>
            <NumericInput
                onChange={value => setPost({ ...post,})}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={200}
                totalHeight={30}
                iconSize={25}
                step={1}
                valueType='real'
                rounded
                textColor='#B0228C'
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#fb5b5a'
                leftButtonBackgroundColor='#26E1ED' />

            <Text>Körfez</Text>
            <NumericInput
                onChange={value => setPost({ ...post,})}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={200}
                totalHeight={30}
                iconSize={25}
                step={1}
                valueType='real'
                rounded
                textColor='#B0228C'
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#fb5b5a'
                leftButtonBackgroundColor='#26E1ED' />
            <Text>Derince</Text>
            <NumericInput
                onChange={value => setPost({ ...post, cayirova: value })}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={200}
                totalHeight={30}
                iconSize={25}
                step={1}
                valueType='real'
                rounded
                textColor='#B0228C'
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#fb5b5a'
                leftButtonBackgroundColor='#26E1ED' />

            <Text>İzmit</Text>
            <NumericInput
                onChange={value => setPost({ ...post,})}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={200}
                totalHeight={30}
                iconSize={25}
                step={1}
                valueType='real'
                rounded
                textColor='#B0228C'
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#fb5b5a'
                leftButtonBackgroundColor='#26E1ED' />
            <Text>Başiskele</Text>
            <NumericInput
                onChange={value => setPost({ ...post,})}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={200}
                totalHeight={30}
                iconSize={25}
                step={1}
                valueType='real'
                rounded
                textColor='#B0228C'
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#fb5b5a'
                leftButtonBackgroundColor='#26E1ED' />

            <Text>Dilovası</Text>
            <NumericInput
                onChange={value => setPost({ ...post,})}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={200}
                totalHeight={30}
                iconSize={25}
                step={1}
                valueType='real'
                rounded
                textColor='#B0228C'
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#fb5b5a'
                leftButtonBackgroundColor='#26E1ED' />
            <Text>Karamürsel</Text>
            <NumericInput
                onChange={value => setPost({ ...post,})}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={200}
                totalHeight={30}
                iconSize={25}
                step={1}
                valueType='real'
                rounded
                textColor='#B0228C'
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#fb5b5a'
                leftButtonBackgroundColor='#26E1ED' />

            <Text>Kandıra</Text>
            <NumericInput
                onChange={value => setPost({ ...post, })}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={200}
                totalHeight={30}
                iconSize={25}
                step={1}
                valueType='real'
                rounded
                textColor='#B0228C'
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#fb5b5a'
                leftButtonBackgroundColor='#26E1ED' />
                            <Text>Kartepe</Text>
            <NumericInput
                onChange={value => setPost({ ...post, })}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={200}
                totalHeight={30}
                iconSize={25}
                step={1}
                valueType='real'
                rounded
                textColor='#B0228C'
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#fb5b5a'
                leftButtonBackgroundColor='#26E1ED' />
                            <Text>Gölcük</Text>
            <NumericInput
                onChange={value => setPost({ ...post, })}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                totalWidth={200}
                totalHeight={30}
                iconSize={25}
                step={1}
                valueType='real'
                rounded
                textColor='#B0228C'
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#fb5b5a'
                leftButtonBackgroundColor='#26E1ED' />



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
                            navigation.navigate("Admin_index", { content: post })
                        }
                    })



                })
            }}>
                <Text >Ekle</Text>
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

