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
} from 'react-native';
import React, { Component, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { requestPermissionsAsync } from "expo-location";

// post
// get
// put
// delete

function useCoordenadas() {
  const [coordenadas, setCoordenadas] = useState({
    latitud: null,
    longitud: null,
  });
  let geoId;

  useEffect(() => {
    geoId = window.navigator.geolocation.watchPosition((position) => {
      setCoordenadas({
        latitud: position.coords.latitude,
        longitud: position.coords.longitude,
      });
    });

    return () => {
      navigator.geolocation.clearWatch(geoId);
    };
  });

  return coordenadas;
}

export default function Coordenadas() {
  const coordenadas = useCoordenadas();

  return coordenadas.latitud == null ? (
    <View>Cargando...</View>
  ) : (
    <View>
      <Text>latitud: {coordenadas.latitud} </Text>
      <Text>longitud: {coordenadas.longitud} </Text>
    </View>
  );
}

// const styles = StyleSheet.create({
// container: {
//   backgroundColor: '#fff',
//   padding: 0,
// },
