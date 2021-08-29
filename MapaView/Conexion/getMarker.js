  
import react from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import React, { Component } from 'react';
import axios from 'axios';
import MapView from 'react-native-maps';
import { Marker, Polyline, Polygon } from 'react-native-maps';

/*
componentDidMount
componentWillonMount
componentWillUpdate
*/

// post
// get
// put
// delete

export const app = async ({
  id,
  nombre,
  latitud,
  longitud,
  descripcion,
  contacto,
  tipo,
  creador,
}) => {
  const datos = await axios.get('http://ladr-ar.herokuapp.com/home', {
    id,
    nombre,
    latitud,
    longitud,
    descripcion,
    contacto,
    tipo,
    creador,
  });
  <Text>{datos}</Text>;

  return (
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
          this.state.datos.map(nombres => (
          <Marker
            coordinate={{
              latitude: parseFloat(datos.latitud),
              longitude: parseFloat(datos.longitud),
            }}
            title={datos.nombre}
            description={datos.descripcion}
          />
        </MapView>
      </View>
    </View>
  );
};

export default class Putcoordenadas extends Component {
  state = {
    nombres: [],
    nombre: '',
    longitud: null,
    latitud: null,
    descripcion: '',
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 0,
  },
});
