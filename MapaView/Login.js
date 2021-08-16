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

    <View style={styles.formcontainer}>
      <View>
        <Text style={{ fontSize: 18 }}>Nombre de usuario</Text>
        <TextInput style={styles.input} placeholder='Nombre de usuario'/>
      </View>
      <View>
        <Text style={{ fontSize: 18 }}>Correo electronico</Text>
        <TextInput style={styles.input} placeholder='Correo electronico'/>
      </View>
      <View>
        <Text style={{ fontSize: 18 }}>Contraseña</Text>
        <TextInput style={styles.input} placeholder='Contraseña'/>
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
    //backgroundColor:'#292929',
    textAlign:'center',
    position: 'relative', top: 101,
  },

  formcontainer:{
    //backgroundColor:'yellow',
    padding: 15,
    position: 'relative', top:180,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    borderColor: '#B2B2B2',
    borderRadius: 15,
    borderWidth:1,
    width: 260,
    height: 28,
    paddingLeft:20,
    marginBottom:20,
  },
  regbot:{
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
});
