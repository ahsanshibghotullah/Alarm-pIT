import React from 'react';
import { View, Picker, Modal } from 'react-native';
import { Field, Button } from './component';

const AddForm = ({ visible, value, onChangeText, onPress }) => {
    const { container, styleButton, pickerStyle, wrapPicker } = styles;
    return (
        <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => {}}
        >
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
                {/* tombol buat nambahin list */}
                <Button
                onPress={this.onButtonPress.bind(this)}
                styleButton={styleButton}
                >
                    Add
                </Button>
            </View>
        </Modal>
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
