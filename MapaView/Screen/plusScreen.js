import React from 'react';
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
          ]}
        />
        <Button title="" />
      </View>

      <View style={styles.div}>
        <Text>Direccion:</Text>
        <TextInput style={styles.textin} />
        <Text>Contacto:</Text>
        <TextInput style={styles.textin} />
        <Text>Descripcion:</Text>
        <TextInput style={styles.textin} />
      </View>

      <Button
        title="Guardar"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

      <TouchableOpacity
        onPress={() => alert('A logrado Logearte')}
        style={styles.but}>
        <Text style={{ fontSize: 22 }}>Guardar</Text>
      </TouchableOpacity>
      
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 2,
    margin: 1,
    marginTop: '25%',
    backgroundColor: 'black',
  },
  border: {
    padding: 10,
    backgroundColor: 'pink',
    borderRadius: 25,
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
    marginTop: 10,
    padding: 5,
  },
  picker: {},
  but: {
    alignItems: "center",
    width: "50%",
    backgroundColor: "#ffff",
  },
});
