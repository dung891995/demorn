import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={{justifyContent:'center'}} onPress={()=>Actions.login()}> home </Text>
      </View>
    );
  }
}

export default home;
