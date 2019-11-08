import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={{justifyContent:'center'}} onPress={()=>Actions.register(({username:'DungNT33' , age : 12}))}> login </Text>
      </View>
    );
  }
}

export default login;
