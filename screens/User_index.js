import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import * as Location from "expo-location";
import { FontAwesome5 } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
var flag = true

const App = (props) => {
  const town = {
    "Karamürsel": { "lat": "40.68887078717858", "long:": "29.616460427621444" },
    "Çayırova": { "lat": "40.83247607410527", "long:": "29.3916387515728" },
    "Gebze": { "lat": "40.80489597012795", "long:": "29.434795581449425" },
    "Darıca": { "lat": "40.77844941736837", "long:": "29.372150040156498" },
    "Körfez": { "lat": "40.76187693538016", "long:": "29.771523835649422" },
    "İzmit": { "lat": "40.76337942504672", "long:": "29.899703036762144" },
    "Gölcük": { "lat": "40.70215906431384", "long:": "29.829563491666576" },
    "Kandıra": { "lat": "41.06808603122199", "long:": "30.154684783852524" },
    "Başiskele": { "lat": "40.699351635371485", "long:": "29.937371996855372" },
    "Derince": { "lat": "40.76029756226806", "long:": "29.823696384311056" },
    "Dilovası": { "lat": "40.78830652211365", "long:": "29.542081745773146" },
    "Kartepe": { "lat": "40.753021482273354", "long:": "30.019990361474314" },
    "Son": { "lat": "40.824576626282806", "long:": "29.919917521422583" },

  }
  const { width, height } = Dimensions.get("screen");
  const [post, setPost] = React.useState({
    data: {}
  })
  
  if(flag == true){
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
  
        var dict = data["path"].bus0
  
        setPost({ ...post, data: dict })
        alert(JSON.stringify(dict))
      })
      flag = false
  }



  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);
  const [friends] = useState([
    {
      username: "bob",
      description: "school friend",
      icon: "dog",
      location: {
        longitude: "77.3",
        latitude: "32.5"
      }
    },
    {
      username: "Alex",
      description: "Childhood friend",
      icon: "dragon",
      location: {
        longitude: "78.3",
        latitude: "32.8"
      }
    },
    {
      username: "Jack",
      description: "Business Partner",
      icon: "dove",
      location: {
        longitude: "77.7",
        latitude: "32.1"
      }
    }
  ]);

  useEffect(() => {
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

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MapView
        initialRegion={mapRegion}
        mapType="terrain"
        style={styles.mapView}
      >
        {mapRegion ? (
          <Circle
            center={{
              longitude: mapRegion.longitude,
              latitude: mapRegion.latitude
            }}
            radius={1000}
            strokeColor="transparent"
            fillColor="rgba(255,0,0,0.3)"
          ></Circle>
        ) : null}
        {mapRegion ? (
          <Marker
            coordinate={{
              longitude: mapRegion.longitude,
              latitude: mapRegion.latitude
            }}
            title="Me"
            description="Myself"
          >
            <View style={styles.circle}>
              <View style={styles.core} />
              <View style={styles.stroke} />
            </View>
          </Marker>
        ) : null}

        {friends
          ? friends.map((friend) => (
            <Marker
              coordinate={friend.location}
              title={friend.username}
              description={friend.description}
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

export default App;