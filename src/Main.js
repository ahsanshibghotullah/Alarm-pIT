import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './component/Button';

class Main extends Component {
    render() {
        return (
            <View>
                <Button>Hello World!</Button>
            </View>
        );
    }
}

export default Main;
