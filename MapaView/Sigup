import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons/FontAwesome';


export default ({ history, navigation}) => (
  <View style={styles.container}>
    <View style={styles.supbottom}>
      <View>
        <TouchableOpacity
          onPress={() => history.push('/Sigup')}
          style={styles.twinbot1}>
          <Text style={{ fontSize: 18 }}>Registrarse</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => history.push('/Login')}
          style={styles.twinbot2}>
          <Text style={{ fontSize: 18 }}>Iniciar Sesion</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.title}>
      <Text style={{ fontSize: 36 }}>Resgistrate</Text>
    </View>

    <View style={styles.formcontainer}>
      <View>
        <Text style={{ fontSize: 18 }}>Nombre de usuario</Text>
        <View style={styles.junto}>
          <Icon name="person-outline" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Nombre de usuario" />
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 18 }}>Correo electronico</Text>
        <View style={styles.junto}>
          <Icon name="mail-outline" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Nombre de usuario" />
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 18 }}>Contraseña</Text>
        <View style={styles.junto}>
          <Icon name="lock-closed-outline" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Nombre de usuario" />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => alert('A logrado registrarse')}
        style={styles.regbot}>
        <Text style={{ fontSize: 18 }}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#999',
    padding: 2,
  },

  supbottom: {
    display: 'flex',
    //backgroundColor: '#fff',
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative', top: -10,
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

  title: {
    //backgroundColor:'#292929',
    textAlign: 'center',
    position: 'relative',
    top: 75,
  },

  formcontainer: {
    //backgroundColor:'yellow',
    padding: 15,
    position: 'relative',
    top: 130,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    borderColor: '#B2B2B2',
    borderRadius: 15,
    borderWidth: 1,
    width: 260,
    height: 28,
    paddingLeft: 20,
    marginBottom: 20,
  },
  regbot: {
    padding: 2,
    paddingTop: 15,
    backgroundColor: '#FC4C00',
    alignItems: 'center',
    fontFamily: 'Lato',
    height: 57,
    width: 138,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FC4C00',
  },
  junto: {
    paddingTop: 13,
    flexDirection: 'row',
  },
  icon: {
    paddingTop:2,
    fontSize: 23,
    color: '#FC4C00',
  },
});
