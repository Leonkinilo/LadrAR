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
//<Image style={styles.map} source={require('../assets/Imagenmapa.jpg')} />
export default ({ history }) => (
  <View style={styles.container}>

    <View style={styles.mapcontainer}>
    <Image style={styles.map} source={require('../assets/Imagenmapa.jpg')} />
    </View>

  <View style={styles.nav}>
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

  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
    height: "94%",
  },
  mapcontainer: {
    backgroundColor: "green",
  },
  map: {
    // flex: 0,
    height: "90%",
  },
  navItem1: {
    backgroundColor:"yellow",
    flex: 0,
  },
  navItem2: {
    backgroundColor:"skyblue",
    flex: 0,
  },
  navItem3: {
    backgroundColor:"red",
    flex: 1,
  },
  //barra principal
  nav: {
    padding: 2,
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#FFFF',
    height: 50,
    width: '100%',
    alignItems: 'center',
  },
  iconBar: {
    fontSize: 30,
    color: '#FC4C00',
  },
});
