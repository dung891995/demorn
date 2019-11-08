import React, { Component } from 'react';
import { Text, View, Image, Button, absolute, } from 'react-native';
import { bold } from 'ansi-colors';

class Greeting extends Component {
    render() {

        return (
            <View style={{ alignItems: 'center' }}>
                <Image style={{ width: 155, height: 155 }} source={require('./img/new-product.png')} />
                <Text style= {{fontWeight:'bold',color:'#333333',fontSize:15,lineHeight:18,marginTop:29,}}> {this.props.name} </Text>
                <Text style={{marginTop:12,fontSize:15,lineHeight:18,color:'#333333',}}> {this.props.name2} </Text>
                <Text style={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 72,
                    lineHeight: 84,
                    position: absolute,
                    color:'#68C52E',
                    marginTop:44,
                }}> {this.props.tile + '%'}</Text>
            </View>
        );
    }
}

export default class Demo extends Component {
    render() {
        const name = 'bạn vừa kết thúc bài học';
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: 30
            }}>
                <View style={{ height: 35, width: '100%', }}></View>

                <Greeting name2={'kết quả bài học '} name={name} tile={70} />

                <Button style={{
                    width: 326,
                    height: 40,
                    left: 25,
                    top: 742,
                    backgroundColor: '#F8F8F8',
                    
                    // box-sizing: border-box;
                    // border-radius: 5px;
                    }}
                    onPress={() => alert('xin chào!')}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            </View>
        );
    }
}
