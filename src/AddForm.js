import React from 'react';
import { View, Picker, Modal } from 'react-native';
import { Field, Button } from './component';
// import PushController from './PushController';

const AddForm = ({ 
    visible, value, onChangeText, onPress, 
    selectedValueHour, onValueChangeHour, selectedValueMinute, onValueChangeMinute
                }) => {
    const { container, wrapField, background, styleButton, pickerStyle, wrapPicker } = styles;
    return (
        <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => {}}
        >
            <View style={container}>
                <View style={background}>
                    <View style={wrapField}>
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
                            <Picker.Item label="0" value="0" />
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                            <Picker.Item label="7" value="7" />
                            <Picker.Item label="8" value="8" />
                            <Picker.Item label="9" value="9" />
                            <Picker.Item label="10" value="10" />
                            <Picker.Item label="11" value="11" />
                            <Picker.Item label="12" value="12" />
                            <Picker.Item label="13" value="13" />
                            <Picker.Item label="14" value="14" />
                            <Picker.Item label="15" value="15" />
                            <Picker.Item label="16" value="16" />
                            <Picker.Item label="17" value="17" />
                            <Picker.Item label="18" value="18" />
                            <Picker.Item label="19" value="19" />
                        </Picker>
                        <Picker
                        selectedValue={selectedValueMinute}
                        onValueChange={onValueChangeMinute}
                        style={pickerStyle}
                        >
                            <Picker.Item label="0" value="0" />
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                            <Picker.Item label="7" value="7" />
                            <Picker.Item label="8" value="8" />
                            <Picker.Item label="9" value="9" />
                            <Picker.Item label="10" value="10" />
                            <Picker.Item label="11" value="11" />
                            <Picker.Item label="12" value="12" />
                            <Picker.Item label="13" value="13" />
                            <Picker.Item label="14" value="14" />
                            <Picker.Item label="15" value="15" />
                            <Picker.Item label="16" value="16" />
                            <Picker.Item label="17" value="17" />
                            <Picker.Item label="18" value="18" />
                            <Picker.Item label="19" value="19" />
                            <Picker.Item label="49" value="49" />
                            <Picker.Item label="50" value="50" />
                            <Picker.Item label="51" value="51" />
                            <Picker.Item label="52" value="52" />
                            <Picker.Item label="53" value="53" />
                            <Picker.Item label="54" value="54" />
                            <Picker.Item label="55" value="55" />
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
    background: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,

    },
    wrapField: {
        margin: 10
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
        margin: 10,
        marginLeft: 35,
    },
    wrapPicker: {
        flexDirection: 'row',
        margin: 10
    },
    pickerStyle: {
        width: 100,
        height: 50,
    },
};

export default AddForm;
