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

    <View style={styles.supbottom}>
      <View>
        <TouchableOpacity
          onPress={() => alert('Registrarse')}
          style={styles.twinbot1}>
          <Text style={{ fontSize: 18 }}>Registrarse</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => history.push('/Search')}
          style={styles.twinbot2}>
          <Text style={{ fontSize: 18 }}>Iniciar Sesion</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.title}>
      <Text style={{fontSize:36,}}>Resgistrate</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#999',
    padding: 2,
  },

  supbottom: {
    display: 'flex',
    backgroundColor: '#fff',
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  twinbot2: {
    padding: 2,
    paddingTop: 0,

    alignItems: 'center',
    fontFamily: 'Lato',
    height: 28,
    width: 140,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#B2B2B2',
  },
  twinbot1: {
    padding: 2,
    paddingTop: 0,
    backgroundColor: '#FC4C00',
    alignItems: 'center',
    fontFamily: 'Lato',
    height: 28,
    width: 140,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FC4C00',
  },

  title:{
    backgroundColor:'#292929',
    textAlign:'center',
    position: 'relative', top: 101,
  },
});
