import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';

export default ({ history }) => (
  <View style={styles.container}>
    <View style={styles.mapcontainer}>
      <Image style={styles.map} source={require('../assets/Imagenmapa.jpg')} />
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
    alignItems: 'center',
  },
  mapcontainer: {
    position: 'absolute',
    top: -45,
  },
  map: {
    width: 393,
    height: 613,
  },

//barra principal
    nav: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#FC4C00',
    position: 'relative',
    top: 568,
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
