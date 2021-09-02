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
import Icon from 'react-native-vector-icons/Ionicons';

export default ({ history }) => (
  <View style={styles.container}>
    <View style={styles.mapcontainer}>
      <Image style={styles.map} source={require('../assets/Imagenmapa.jpg')} />
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
    backgroundColor: '#FFFF',
    position: 'relative',
    top: 568,
    height: 45,
    width: '100%',
    alignItems: 'center',
  },
  navItem1: {
    alignItems: 'center',
    backgroundColor: '#999',
    position: 'relative', top: 0,
    //flex:1,
  },
  // butsize: {
  //   fontSize: 20,
  // },
  iconBar: {
    fontSize: 30,
    color: '#FC4C00',
  },
});
