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

export default ({history}) => (
  <View>
    <Text>Logeate</Text>
    <TouchableOpacity onPress={() => history.push('/Search')}>
      <Text>Change page</Text>
    </TouchableOpacity>
  </View>
)