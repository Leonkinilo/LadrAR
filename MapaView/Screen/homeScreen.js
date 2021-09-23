import React from 'react';
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
//<Image style={styles.map} source={require('../assets/Imagenmapa.jpg')} />
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
      <TouchableOpacity
        onPress={() => history.push('/searchScreen')}
        style={styles.navItem1}>
        <Icon name="menu" style={styles.iconBar} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => history.push('/homeScreen')}
        style={styles.navItem}>
        <Icon name="location-outline" style={styles.iconBar} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => history.push('/signupScreen')}
        style={styles.navItem}>
        <Icon name="person-outline" style={styles.iconBar} />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    height: '94%',
  },
  mapcontainer: {
    position: 'absolute',
    top: -45,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('screen').height,
  },
  navItem1: {
    backgroundColor: 'yellow',
    flex: 0,
  },
  navItem2: {
    backgroundColor: 'skyblue',
    flex: 0,
  },
  navItem3: {
    backgroundColor: 'red',
    flex: 1,
  },
  //barra principal
  nav: {
    padding: 2,
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#FFFF',
    height: 50,
    width: '100%',
    alignItems: 'center',
    marginTop: 80,
  },
  iconBar: {
    fontSize: 30,
    color: '#FC4C00',
  },
});