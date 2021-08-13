import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image} from 'react-native';
import App from './App.js';
import { NativeRouter, Route, Link } from "react-router-native";
import Home from "./Home";
import Search from "./Search";
import Login from "./Login";


const index = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
          
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Home</Text>
          </Link>
          <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Search</Text>
          </Link>
          <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Login</Text>
          </Link>
        </View>

        <Route exact path="/" component={Home} />
        <Route path="/Search" component={Search} />
        <Route path="/Login" component={Login} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   marginTop: 25,
  //   padding: 10
  // },
  // header: {
  //   fontSize: 20
  // },
  // nav: {
  //   flexDirection: "row",
  //   justifyContent: "space-around"
  // },
  // navItem: {
  //   flex: 1,
  //   alignItems: "center",
  //   padding: 10
  // },
  // subNavItem: {
  //   padding: 5
  // },
  // topic: {
  //   textAlign: "center",
  //   fontSize: 15
  // }
});

export default index;