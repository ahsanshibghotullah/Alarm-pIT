import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from './component';
import AddForm from './AddForm';

class Main extends Component {
    state ={
        showModal: false
    }

    onAddPress() {
        this.setState({ showModal: false })
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
                    onPress={() => this.setState({ showModal: true })}
                    >
                    +
                    </Button>
                    <AddForm 
                    visible={this.state.showModal}
                    onPress={this.onAddPress.bind(this)}
                    />
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
