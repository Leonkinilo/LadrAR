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

    <TouchableOpacity
      onPress={() => history.push('/searchScreen')}
      style={styles.navItem1}>
      <Icon name="menu" style={styles.iconBar} />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => history.push('/homeScreen')}
      style={styles.navItem2}>
      <Icon name="location-outline" style={styles.iconBar} />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => history.push('/signupScreen')}
      style={styles.navItem3}>
      <Icon name="person-outline" style={styles.iconBar} />
    </TouchableOpacity>
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
  navItem1: {
    alignItems: 'center',
    position: 'absolute',
    top: 574,
    left: 39,
  },
  navItem2: {
    alignItems: 'center',
    position: 'absolute',
    top: 574,
    right: 149,
  },
  navItem3: {
    alignItems: 'center',
    position: 'absolute',
    top: 574,
    left: 258,
  },
  // butsize: {
  //   fontSize: 20,
  // },
  iconBar: {
    fontSize: 30,
    color: '#FC4C00',
  },
});
