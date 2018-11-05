import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDg4W7GWv8piulZuVy6emH4U4d9akK9_UI",
  authDomain: "reactnativefirebase-f8d15.firebaseapp.com",
  databaseURL: "https://reactnativefirebase-f8d15.firebaseio.com",
  projectId: "reactnativefirebase-f8d15",
  storageBucket: "reactnativefirebase-f8d15.appspot.com"
};

firebase.initializeApp(firebaseConfig);

import {
  Container,
  Content,
  Header,
  Label,
  Item,
  Input,
  Form,
  Button
} from "native-base";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  loginUser = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function user(user) {
          alert(user);
        });
    } catch (error) {
      console.log(error.toString());
    }
  };

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("Please enter atleast 6 characters");
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString());
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel style={{ margin: 5 }}>
            <Label>Email</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={email => this.setState({ email })}
            />
          </Item>

          <Item floatingLabel style={{ margin: 5 }}>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={password => this.setState({ password })}
            />
          </Item>

          <Button
            full
            rounded
            success
            style={{ marginTop: 15 }}
            onPress={
              this.state.email && this.state.password
                ? () => this.loginUser(this.state.email, this.state.password)
                : null
            }
          >
            <Text style={{ color: "white" }}>Login</Text>
          </Button>

          <Button
            full
            rounded
            primary
            style={{ marginTop: 15 }}
            onPress={() =>
              this.signUpUser(this.state.email, this.state.password)
            }
          >
            <Text style={{ color: "white" }}>Sign Up</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10
  }
});
