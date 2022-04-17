import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import * as Location from "expo-location";
import { FontAwesome5 } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
var flag = true
var markers = []
export default function User_index({ route }) {

  const town = {
    
    "Karamürsel": { "latitude": "40.68887078717858", "longitude:": "29.616460427621444" },
    "Çayırova": { "latitude": 40.83247607410527, "longitude:": 29.3916387515728 },
    "Gebze": { "latitude": "40.80489597012795", "longitude:": "29.434795581449425" },
    "Darıca": { "latitude": "40.77844941736837", "longitude:": "29.372150040156498" },
    "Körfez": { "latitude": "40.76187693538016", "longitude:": "29.771523835649422" },
    "İzmit": { "latitude": "40.76337942504672", "longitude:": "29.899703036762144" },
    "Gölcük": { "latitude": "40.70215906431384", "longitude:": "29.829563491666576" },
    "Kandıra": { "latitude": "41.06808603122199", "longitude:": "30.154684783852524" },
    "Başiskele": { "latitude": "40.699351635371485", "longitude:": "29.937371996855372" },
    "Derince": { "latitude": "40.76029756226806", "longitude:": "29.823696384311056" },
    "Dilovası": { "latitude": "40.78830652211365", "longitude:": "29.542081745773146" },
    "Kartepe": { "latitude": "40.753021482273354", "longitude:": "30.019990361474314" },
    "Son": { "latitude": "40.824576626282806", "longitude:": "29.919917521422583" },

  }
  const { width, height } = Dimensions.get("screen");
  const [post, setPost] = React.useState({
    data: {}
  })

  if (flag == true) {
    fetch('http://127.0.0.1:5000/api/v5/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => (
        response.json())
      ).then(data => {

        tmp = {}
        var bus = data["path"]["users"][route.params.content.username]
        var dict = data["path"][bus]

        setPost({ ...post, data: dict })

        
      })
    flag = false
  }

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);

  

    for (const [key, value] of Object.entries(post.data)) {
    markers.push({ "username": key, icon:"dragon" , "location": town[value.route] })
  }
  alert(JSON.stringify(markers[0]))

  const [friends] = useState(markers);


/*   useEffect(() => {
    (async () => {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      setMapRegion({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        longitudeDelta: 0.0922,
        latitudeDelta: 0.0421
      });
    })();
  }, []);
 */
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MapView
        mapType="terrain"
        style={styles.mapView}
      >

        {friends
          ? friends.map((friend) => (
            <Marker
              coordinate={friend.location}
              title={friend.username}
              
            >
              <FontAwesome5
                name={friend.icon}
                size={26}
                style={{ color: "red" }}
              />
            </Marker>
          ))
          : null}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width,
    height
  },
  mapView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width,
    height
  },
  circle: {
    width: 26,
    height: 26,
    borderRadius: 50
  },
  stroke: {
    backgroundColor: "#ffffff",
    borderRadius: 50,
    width: "100%",
    height: "100%",
    zIndex: 1
  },
  core: {
    backgroundColor: "red",
    width: 24,
    position: "absolute",
    top: 1,
    left: 1,
    right: 1,
    bottom: 1,
    height: 24,
    borderRadius: 50,
    zIndex: 2
  }
});
