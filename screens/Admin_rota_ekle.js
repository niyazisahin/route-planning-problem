import * as React from 'react';
import { StyleSheet, TextInput, View, Text, Alert, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input'

export default function Admin_rota_ekle() {

    const navigation = useNavigation();

    const [post, setPost] = React.useState({

        "Çayırova": 0,
        "Gebze": 0,
        "Darıca": 0,
        "Körfez": 0,
        "Derince": 0,
        "Kandıra": 0,
        "Karamürsel": 0,
        "Gölcük": 0,
        "İzmit": 0,
        "Kartepe": 0,
        "Başiskele": 0,
        "Dilovası": 0

    })

    return (
        <View style={styles.container}>

            <Text>Çayırova</Text>
            <NumericInput
                onChange={value => setPost({ ...post, "Çayırova": value })}
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
                onChange={value => setPost({ ...post, "Gebze": value })}
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
                onChange={value => setPost({ ...post, "Darıca": value })}
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
                onChange={value => setPost({ ...post, "Körfez": value })}
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
                onChange={value => setPost({ ...post, "Derince": value })}
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
                onChange={value => setPost({ ...post, "İzmit": value })}
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
                onChange={value => setPost({ ...post, "Başiskele": value })}
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
                onChange={value => setPost({ ...post, "Dilovası": value })}
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
                onChange={value => setPost({ ...post, "Karamürsel": value })}
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
                onChange={value => setPost({ ...post, "Kandıra": value })}
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
                onChange={value => setPost({ ...post, "Kartepe": value })}
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
                onChange={value => setPost({ ...post, "Gölcük": value })}
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
                fetch('http://127.0.0.1:5000/api/v6/', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(post)

                }).then(response => {
                    response.text().then(function (text) {

                        if (text == "True") {
                            alert("Veriler Gönderildi.. \n Admin Paneline YÖnlendiriliyorsunuz")
                            navigation.navigate("Admin_index", { content: post })
                        }
                        else {
                            alert("Veri Gönderme İşlemi Başarısız")
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

