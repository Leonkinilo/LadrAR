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
  TextInput,
} from 'react-native';

export default ({ history }) => (
  <View style={styles.container}>
    <Text>Has tus busqueda aqui</Text>
    <TouchableOpacity onPress={() => history.push('/Login')}>
      <Text>Change page</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#999",
    padding: 2,
  }

});