import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default ({ history }) => (
  <View style={styles.container}>
    <View style={styles.blancocontainer}>
      <View style={styles.blanco}>
        <TextInput style={styles.tama}/>
      </View>

      <View style={styles.blanco}>
        <TextInput style={styles.tama}/>
      </View>

      <View style={styles.blanco}>
        <TextInput style={styles.tama}/>
      </View>

      <View style={styles.blanco}>
        <TextInput style={styles.tama}/>
      </View>

      <View style={styles.blanco}>
        <TextInput style={styles.tama}/>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 2,
    flexDirection: 'colum',
  },
  blancocontainer: {
    position: 'relative',
    top: -10,
  },
  blanco: {
    width: '100%',
    height: 110,
    justifyContent: 'center',
    textAlign: 'center',
  },
  tama:{
    borderWidth: 2,
    borderRadius: 0,
    borderColor: '#CCC',
    height:'100%',
    width: '99%',
  },
});
