import react from "react";
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
import React, { Component } from "react";
import axios from "axios";
import MapView from 'react-native-maps';
import { Marker, Polyline, Polygon, } from 'react-native-maps';

/*
componentDidMount
componentWillonMount
componentWillUpdate
*/

// post
// get
// put
// delete

export default class Putcoordenadas extends Component {
  state = {
    nombres: [],
    noombre: "",
    longitud: null,
    latitud: null,
    descripcion: "",

  }



  async componentDidMount() {
    const datos = await axios.get("https://ladr-ar.herokuapp.com/home")
    this.setState({ nombres: datos.data }) //ver que es data u otro da
    console.log(this.state.nombres)

  }

  render() {
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

            <View>
              {
                this.state.nombres.map(nombres => (
                  <Marker
                    coordinate={{
                      latitude: parseFloat(nombres.latitud),
                      longitude: parseFloat(nombres.longitud),
                    }}
                    title={nombres.nombre}
                    description={nombres.descripcion}
                  />
                ))}

            </View>

          </MapView>
        </View>

      </View>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 0,
  }
})
