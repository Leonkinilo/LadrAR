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
  Animated,
} from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import { Navegation } from 'react-native-navigation';
import { creatnavigationStack } from '@react-navigation/stack';
import { creatnavigationDraw } from '@react-navigation/drawer';
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";

// import Constants from 'expo-constants';
// import { Card } from 'react-native-paper';
// import AssetExample from './components/AssetExample';

import Home from './Pantalla/homeScreen';
import Search from './Pantalla/searchScreen';
import Signup from './Pantalla/signupScreen';
import Login from './Pantalla/loginScreen';
import Homepage from './Homepage';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>

        <View style={styles.nav}>
        </View>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/searchScreen" component={Search} />
          <Route exact path="/signupScreen" component={Signup} />
          <Route exact path="/loginScreen" component={Login} />
          <Route exact path="/Homepage" component={Homepage} />
        </Switch>
      </View>
    </NativeRouter>
  );
}

// <View style={styles.nav}>
//   <Link to="/Search" underlayColor="#f0f4f7" style={styles.navItem}>
//     <Text style={styles.butsize}>Search</Text>
//   </Link>
//   <Link to="/Home" underlayColor="#292929" style={styles.navItem}>
//     <Text style={styles.butsize}>Home</Text>
//   </Link>
//   <Link to="/Sigup" underlayColor="#f0f4f7" style={styles.navItem}>
//     <Text style={styles.butsize}>Sigup</Text>
//   </Link>
// </View>
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 0,
  },

  //barra principal
  nav: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    position: 'relative',
    top: 613,
    height: 45,
    alignItems: 'center',
  },
  // navItem: {
  //   alignItems: 'center',
  //   //flex:1,
  // },
  // butsize: {
  //   fontSize: 20,
  // },
});

export default App;
