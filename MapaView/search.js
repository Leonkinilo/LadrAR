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
        onPress={() => history.push('/search')}
        style={styles.navItem}>
        <Icon name="menu" style={styles.iconBar} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => history.push('/home')}
        style={styles.navItem}>
        <Icon name="location-outline" style={styles.iconBar} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => history.push('/signup')}
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
    backgroundColor: '#FFFF',
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
  // butsize: {
  //   fontSize: 20,
  // },
    iconBar:{
    fontSize:30,
    color: "#FC4C00",
  },
});