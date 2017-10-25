import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { Field, Button } from './component';


class AddForm extends Component {
    state = {
        date: '',
        date2: ''
    }

    onButtonPress() {

    }
    
    render() {
        const { container, styleButton, pickerStyle, wrapTextInput } = styles;
        return (
            <View style={container}>
                <View>
                    <Field 
                    label="Label"
                    placeholder="..."
                    autoCorrect={true}
                    onChangeText={this.onButtonPress.bind(this)}
                    />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Picker
                    selectedValue={this.state.date}
                    onValueChange={date => this.setState({ date })}
                    style={pickerStyle}
                    >
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                    </Picker>
                    <Picker
                    selectedValue={this.state.date2}
                    onValueChange={date2 => this.setState({ date2 })}
                    style={pickerStyle}
                    >
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                    </Picker>
                </View>

                <View>
                    {/* tombol buat nambahin list */}
                    <Button
                    onPress={this.onButtonPress.bind(this)}
                    styleButton={styleButton}
                    >
                        Add
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        // flexDirection: 'space-around',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapTextInput: {
       borderWidth: 1,
    },
    styleButton: {
        borderRadius: 5,
        padding: 3,
        alignItems: 'center',
        height: 30,
        width: 100,
        margin: 10
    },
    pickerStyle: {
        width: 80,
        height: 50,
    },
};

export default AddForm;
