import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Ionicons';
import { Field, Form, Formik, FormikProps } from 'formik';
import * as ImagePicker from 'expo-image-picker';

export default ({ history }) => (
  <View style={styles.container}>
    <View style={styles.border}>
      <View style={styles.div1}>
        <RNPickerSelect
          style={styles.picker}
          Title="Elegir categoria"
          //placeholder=""
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'Perro', value: 'perro' },
            { label: 'Hogar de transito', value: 'hogar de transito' },
            { label: 'Veterinaria', value: 'veterinaria' },
            { label: 'Punto de venta', value: 'punto de venta' },
          ]}
        />

        <Image
          style={styles.image}
          source={require('../assets/IMG-20210303-WA0012.jpg')}
        />

        <TouchableOpacity style={styles.but}>
          <Icon name="add-circle-outline" style={styles.imageicon} />
        </TouchableOpacity>
      </View>

      <View style={styles.div}>
        <Text>Direccion:</Text>
        <TextInput style={styles.textin} />
        <Text>Contacto:</Text>
        <TextInput keyboardType="numeric" style={styles.textin} />
        <Text>Descripcion:</Text>
        <TextInput style={styles.textin} />
      </View>

      <TouchableOpacity
        onPress={() => alert('A creado un nuevo punto')}
        style={styles.but1}>
        <Text style={{ fontSize: 22 }}>Guardar</Text>
      </TouchableOpacity>
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
    padding: 2,
    margin: 1,
    marginTop: '25%',
    //backgroundColor: 'black',
    //lineHeight: 20,
  },
  border: {
    padding: 10,
    //backgroundColor: 'pink',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#B2B2B2',
  },
  div1: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  div: {
    marginBottom: 10,
  },
  textin: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#FC4C00',
    marginTop: 5,
    marginBottom: 10,
    padding: 5,
    textAlign: 'center',
  },
  picker: {},
  but1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    backgroundColor: '#ffff',
    marginLeft: '25%',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#FC4C00',
  },
  image: {
    width: 110,
    height: 89,
    borderRadius: 25,
    resizeMode: 'contain',
  },
  imageicon: {
    fontSize: 20,
    color: '#FC4C00',
  },

  //barra
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
