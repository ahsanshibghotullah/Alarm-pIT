import React from 'react';
import { View, Picker } from 'react-native';
import { Field, Button } from './component';

const AddForm = ({ 
    value, onChangeText, onPress, 
    selectedValueHour, onValueChangeHour, selectedValueMinute, onValueChangeMinute
                }) => {
    const { container, styleButton, pickerStyle, wrapPicker } = styles;
    return (
        <View style={container}>
            <View>
                <Field 
                label="Label"
                placeholder="..."
                autoCorrect={true}
                onChangeText={onChangeText}
                value={value}
                />
            </View>

            <View style={wrapPicker}>
                <Picker
                selectedValue={selectedValueHour}
                onValueChange={onValueChangeHour}
                style={pickerStyle}
                >
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                </Picker>
                <Picker
                selectedValue={selectedValueMinute}
                onValueChange={onValueChangeMinute}
                style={pickerStyle}
                >
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                </Picker>
            </View>
            {/* tombol buat nambahin list */}
            <Button
            onPress={onPress}
            styleButton={styleButton}
            >
                Add
            </Button>
        </View>
    );
};


const styles = {
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
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
    wrapPicker: {
        flexDirection: 'row',
    },
    pickerStyle: {
        width: 80,
        height: 50,
    },
};

export default AddForm;
