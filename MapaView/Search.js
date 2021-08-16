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
        <TextInput style={styles.tama} />
      </View>

      <View style={styles.blanco}>
        <TextInput style={styles.tama} />
      </View>

      <View style={styles.blanco}>
        <TextInput style={styles.tama} />
      </View>

      <View style={styles.blanco}>
        <TextInput style={styles.tama} />
      </View>

      <View style={styles.blanco}>
        <TextInput style={styles.tama} />
      </View>
    </View>
    <View style={styles.nav}>
      <TouchableOpacity
        onPress={() => history.push('/Search')}
        style={styles.navItem}>
        <Text style={styles.butsize}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => history.push('/Home')}
        style={styles.navItem}>
        <Text style={styles.butsize}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => history.push('/Sigup')}
        style={styles.navItem}>
        <Text style={styles.butsize}>Sigup</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 0,
    flexDirection: 'colum',
  },
  blancocontainer: {
    position: 'relative',
    top: -10,
  },
  blanco: {
    padding: 2,
    width: '100%',
    height: 110,
    justifyContent: 'center',
    textAlign: 'center',
  },
  tama: {
    borderWidth: 2,
    borderRadius: 0,
    borderColor: '#CCC',
    height: '100%',
    width: '99%',
  },

  nav: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#FC4C00',
    position: 'relative',
    top: 18,
    height: 45,
    width:'100%',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    //flex:1,
  },
  butsize: {
    fontSize: 20,
  },
});
