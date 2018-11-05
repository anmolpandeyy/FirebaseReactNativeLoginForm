import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyDg4W7GWv8piulZuVy6emH4U4d9akK9_UI",
  authDomain: "reactnativefirebase-f8d15.firebaseapp.com",
  databaseURL: "https://reactnativefirebase-f8d15.firebaseio.com",
  projectId: "reactnativefirebase-f8d15",
  storageBucket: "reactnativefirebase-f8d15.appspot.com",
  messagingSenderId: "298139796180"
});

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
  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel style={{ margin: 5 }}>
            <Label>Email</Label>
            <Input autoCapitalize="none" autoCorrect={false} />
          </Item>
          <Item floatingLabel style={{ margin: 5 }}>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </Item>
          <Button full rounded success style={{ marginTop: 15 }}>
            <Text style={{ color: "white" }}>Login</Text>
          </Button>
          <Button full rounded primary style={{ marginTop: 15 }}>
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
