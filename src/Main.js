import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from './component';

class Main extends Component {
    state ={
        showModal: false
    }
    
    onButtonPress() {
     
    }

    render() {
       const { containerStyle, styleWrapButton, styleButton, styleText } = styles;
        return (
            <View style={containerStyle}>
                <View style={styleWrapButton}>
                    {/* tombol buat pindah ke Add Form */}
                    <Button
                    styleButton={styleButton}
                    styleText={styleText}
                    onPress={this.onButtonPress.bind(this)}
                    >
                    +
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column'
    },
    styleWrapButton: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 20,
        marginBottom: 50,
        flex: 1,
    },
    styleButton: {
        borderColor: 'black',
        borderRadius: 40,
        width: 80,
        height: 80,
        borderWidth: 1,
        backgroundColor: 'black'
    },
    styleText: {
        color: 'white',
        fontSize: 20,
    },
};

export default Main;
