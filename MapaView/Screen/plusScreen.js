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
import Icon from 'react-native-vector-icons/Ionicons';
import { Field, Form, Formik, FormikProps } from 'formik';

export default ({ history }) => (
  <View style={styles.container}>
    <View style={styles.border}>
      <View style={styles.div1}>
        <TextInput style={styles.textin} />
        <Button></Button>
      </View>
      
      <View style={styles.div}>
        <Text>Direccion:</Text>
        <TextInput style={styles.textin} />
        <Text>Contacto:</Text>
        <TextInput style={styles.textin} />
        <Text>Descripcion:</Text>
        <TextInput style={styles.textin} />
      </View>

      <Button></Button>
    </View>
  </View>
);


      //  <Form>
      //      <Field type="email" name="email" placeholder="Email" />
      //      <Field as="select" name="color">
      //        <option value="red">Red</option>
      //        <option value="green">Green</option>
      //        <option value="blue">Blue</option>
      //   </Field>

const styles = StyleSheet.create({
  container:{
    padding: 2,
    margin: 1,
    backgroundColor: 'black',
  },
  border:{
    padding: 10,
    backgroundColor: 'pink',
  },
  div1:{
    marginBottom: 10,
    flexDirection: 'row',
  },
  div:{
    marginBottom: 10,
  },
  textin:{
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FC4C00',
    marginTop: 10,
    padding: 5,
  },
});
