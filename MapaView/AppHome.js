import * as React from 'react';
import react from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import { Marker, Polyline, Polygon } from 'react-native-maps';
//import { GoogleMap, Marker } from "react-google-maps"

// {MARKERS.map((marker) => (
//   <Marker
//     //key={marker.id}
//     coordinate={{
//       // latitude: marker.latitude,
//       // longitude: marker.longitude,
//       latitude: -34.54977,
//       longitude: -58.453956,
//     }}
//     title="El Estarbocks"
//     description="Esto es el Estarbocks"
//   />
// ))}

export default ({ history }) => (
  <View style={styles.container}>
    <View style={styles.mapcontainer}>
      <MapView
        style={styles.map}
        region={{
          latitude: -34.54977,
          longitude: -58.453956,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: -34.54974245095492,
            longitude: -58.45410227317753,
          }}
          title="Escuela Ort"
          description="Escuela Ort Belgrano"
        />
        <Marker
          coordinate={{
            latitude: -34.55067687838073,
            longitude: -58.45462136534148,
          }}
          title="Escuela Ort"
          description="Escuela Ort Montañeses"
        />
        <Marker
          coordinate={{
            latitude: -34.549525804693445,
            longitude: -58.45738783708342,
          }}
          title="Veterinaria Cankún"
          description="http://www.veterinariacankun.com.ar/"
        />
        <Marker
          coordinate={{
            latitude: -34.55233737505485,
            longitude: -58.450638760692705,
          }}
          title="BEN PET SHOP"
          description="Tienda de alimentos para animales"
        />
        <Marker
          coordinate={{
            latitude: -34.5644667534736,
            longitude: -58.45835118278497,
          }}
          title="DNIPET"
          description="Servicio de control de animales"
        />
      </MapView>
    </View>
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => alert('Search')} style={styles.navItem}>
        <Icon name="menu" style={styles.iconBar} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => history.push('/Home')}
        style={styles.navItem}>
        <Icon name="location-outline" style={styles.iconBar} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => history.push('/Signup')}
        style={styles.navItem}>
        <Icon name="person-outline" style={styles.iconBar} />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  mapcontainer: {
    position: 'absolute',
    top: -45,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  //barra principal
  nav: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#FFFF',
    position: 'relative',
    top: 667,
    height: 45,
    width: '100%',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    //flex:1,
  },
  iconBar: {
    fontSize: 30,
    color: '#FC4C00',
  },
});
