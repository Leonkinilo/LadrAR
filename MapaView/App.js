import * as React from 'react';
import react from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import { Navegation } from 'react-native-navigation';
import { creatnavigationStack } from '@react-navigation/stack';
import { creatnavigationDraw } from '@react-navigation/drawer';

// import Constants from 'expo-constants';
// import { Card } from 'react-native-paper';
// import AssetExample from './components/AssetExample';

import Home from './Pantalla/Home';
import Search from './Pantalla/Search';
import Sigup from './Pantalla/Sigup';
import Login from './Pantalla/Login';

//<Text style={styles.butsize}>Search</Text>
function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/Search" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text style={styles.butsize}>Search</Text>
          </Link>
          <Link to="/Home" underlayColor="#292929" style={styles.navItem}>
            <Text style={styles.butsize}>Home</Text>
          </Link>
          <Link to="/Sigup" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text style={styles.butsize}>Sigup</Text>
          </Link>
        </View>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/Sigup" component={Sigup} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 0,
  },
  nav: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#FC4C00',
    position: 'relative',
    top: 613,
    height: 45,
    alignItems: 'center'
  },
  navItem: {
    alignItems: 'center',
    //flex:1,
  },
  butsize: {
    fontSize: 20,
  },
});

export default App;
