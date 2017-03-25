import React, {Component} from 'react';
import {
    View,
} from 'react-native'
export let test  = 'hello world';
export default class SecondUI extends Component {

    static navigationOptions={
        title:'第二页',
    }
    render () {
        return (
            <View></View>
        );
    }
}