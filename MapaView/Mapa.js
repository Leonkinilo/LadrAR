import { StatusBar } from 'expo-status-bar';
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
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';
import MapView from 'react-native-maps';

const App = () => {
  return (
    <View style={styles.container}>
      // <View style={styles.logo}>// </View>
      <View style={styles.contmap}>
        <MapView
          style={styles.map}
          region={{
            latitude: -34.54977,
            longitude: -58.453956,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />

    {MARKERS.map((marker) => (
          <Marker
            //key={marker.id}
            coordinate={{
              // latitude: marker.latitude,
              // longitude: marker.longitude,
              latitude: -34.54977,
              longitude: -58.453956,
            }}
            title="PetShop"
            description="Tienda de Mascotas"
          />
        ))}
        
      </View>

      
      <View style={styles.barracontainer}>
        <TouchableOpacity
          onPress={() => Alert.alert("Filtro")}
          style={styles.barra}
        >
          <Text style={styles.barratext}>Buscador</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Alert.alert('Cordenadas')}
          style={styles.barra2}>
          <Text style={styles.barratext}>Mapa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Alert.alert('Perfil')}
          style={styles.barra3}>
          <Text style={styles.barratext}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 2,
    backgroundColor: '#fff',
    padding: 8,
  },
  // logo: {
  //   position: 'absolute', top: 22, left: -20,
  //   margin: 0,
  //   height: 50,
  //   width: 800,
  //   fontSize: 20,
  //   textAlign: 'center',
  //   backgroundColor: '#F40F00'
  // },
  
  // image:{
  //   position: 'relative', top: 3, left: -8,
  //   width:390,
  //   height:530,
  // },
  barracontainer: {
    width: 200,
    height: 200,
    backgroundColor: '#292929',
    position: 'absolute',
    top: 9,
  },
  barra: {
    width: 140,
    height: 60,
    position: 'absolute',
    top: 253,
    left: -18,
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
  },
  barra2: {
    width: 140,
    height: 60,
    position: 'absolute',
    top: 253,
    left: 120,
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
  },
  barra3: {
    width: 120,
    height: 60,
    position: 'absolute',
    top: 253,
    left: 260,
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
  },
  barratext: {
    fontSize: 20,
    //width: ,
    position: 'relative',
    top: 0,
    color: '#292929',
    textAlign: 'center',
  },
  contmap: {
    position: 'absolute',
    top: 21,
    left: 0,
    button: 0,
  },
  map: {
    position: 'absolute',
    top: 100,
    left: 10,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
