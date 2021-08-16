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
} from 'react-native';

export default ({ history }) => (
  <View style={styles.container}>
    <View style={styles.mapcontainer}>
      <Image style={styles.map} source={require('../assets/Imagenmapa.jpg')} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#999',
    alignItems: 'center',
  },
  mapcontainer:{
    position:'absolute', top: -45,
  },
  map: {
    width: 393,
    height: 613,
  },
});
