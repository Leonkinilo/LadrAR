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
import Icon from 'react-native-vector-icons/Ionicons';

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
        onPress={() => history.push('/searchScreen')}
        style={styles.navItem}>
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
    backgroundColor: '#fff',
    padding: 0,
    flexDirection: 'column',
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
    padding: 4,
    borderWidth: 2,
    borderRadius: 0,
    borderColor: '#CCC',
    height: '100%',
    width: '99%',
  },

  // butsize: {
  //   fontSize: 20,
  // },
  //barra
  nav: {
    padding: 2,
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#FFFF',
    height: 50,
    width: '100%',
    alignItems: 'center',
    marginTop: 28,
  },
  iconBar: {
    fontSize: 30,
    color: '#FC4C00',
  },
});
