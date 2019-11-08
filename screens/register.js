import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const username = this.props.username;
    const age = this.props.age;
    return (
      <View>
      <Text>{username}</Text>
      <Text>{age}</Text>
        <Text style={{justifyContent:'center'}} onPress={()=>Actions.home()}> register </Text>
      </View>
    );
  }
}

export default register;
