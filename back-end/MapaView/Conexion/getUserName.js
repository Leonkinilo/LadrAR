import react from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {Component} from "react";
import axios from "axios";

/*
componentDidMount
componentWillonMount
componentWillUpdate
*/

    // post
    // get
    // put
    // delete

export default class Putname extends Component {
    state = {
      nombres: [],
      noombre: ""
    }
    oncChangeNombre = (e) => {
      this.setState({
        nombre: e.target.value
      })

    }

    //   onSubmit = objeto => {
    //     conts res = await axios.post("https://ladr-ar.herokuapp.com/home", {username: this.state.CreateUser})
    //     <Text>res</Text>
    //     objeto.preventDefault();
    //   }

    // }

    async componentDidMount () {
      const datos = await axios.get("https://ladr-ar.herokuapp.com/home")
      this.setState({nombres: datos.data}) //ver que es data u otro
      console.log(this.state.nombres)

    }

    render() {
      return(
        <View style={styles.container}>\
          <View>
            <View>
              <Text>sidjf</Text>
              <View>
                <TextInput onChange={this.oncChangeNombre} />
              </View>
            </View>
          </View>

          <View>
            {
              this.state.nombres.map(nombres => (
              <Text key= {nombres._id} >
                {nombres.nombre}
              </Text>))
            }
          </View>
        </View>
      )
    }


}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 0,
  },
