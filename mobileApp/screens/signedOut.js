import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { onLogin } from "../auth";

export default () => (
    
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Light</Text>
    <TextInput
        style={{height: 60, width: "80%" , borderColor:'grey'}}
        placeholder="Email"
        onChangeText={(text) => this.setState({email:text})}
        value={this.state.email}
    />

    <TextInput secureTextEntry = {true}
        style={{height: 60, width: "80%", borderColor:'grey'}}
        placeholder="Password"
        onChangeText={(text) => this.setState({password: text})}
        value={this.state.password}
        type='password'
    />
  
    <Button
        onPress={() => onLogin()}
        title="Log In"
        />

  </View>
);