import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Field, Button } from './component';


class AddForm extends Component {
    onButtonPress() {

    }

    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <Field 
                label="Label"
                placeholder="..."
                autoCorrect={true}
                value={}
                onChangeText={}
                styleContainer={}
                styleLabel={}
                styleTextInput={}
                />
                {/* tombol buat nambahin list */}
                <Button
                onPress={this.onButtonPress.bind(this)}
                >
                    Add
                </Button>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default AddForm;
