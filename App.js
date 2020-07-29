import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './src/LoginForm';
//import Header from './src/Header';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyBQV2JTF_qKU-7Kd58i8GQHbwcnFJ6r9BI",
      authDomain: "sample1-ae04d.firebaseapp.com",
      databaseURL: "https://sample1-ae04d.firebaseio.com",
      projectId: "sample1-ae04d",
      storageBucket: "sample1-ae04d.appspot.com",
      messagingSenderId: "588935163359",
      appId: "1:588935163359:web:868c203cc4627725c6686a",
      measurementId: "G-D96R7X17JK"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: false});
      }
    });
  }
  
  render() {
    return (
      <View>
        <LoginForm />
      </View>
    )
  }
}

export default App;
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/