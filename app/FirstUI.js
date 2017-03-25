import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';
import SecondUI, {test} from './SecondUI';
import {StackNavigator} from 'react-navigation'

class FirstUI extends React.Component {

    static navigationOptions = {
        title: '主页',
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        const theNextName = `进入${SecondUI.navigationOptions.title}`;
        return (
            <View style={{ flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'red' }}>
                <Button style={{backgroundColor:'blue'}} onPress={ () => {navigate('Profile', { name:'A'})} }
                title={theNextName}></Button>
                <Text>{test}</Text>
            </View>
        )
    }
}

export const MyApp = StackNavigator({
    Home: {screen: FirstUI},
    Profile: {screen: SecondUI},
});