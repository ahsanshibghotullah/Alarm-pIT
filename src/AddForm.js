import React from 'react';
import { View, Picker, Modal } from 'react-native';
import { Field, Button } from './component';

const AddForm = ({ 
    visible, value, onChangeText, onPress, 
    selectedValueHour, onValueChangeHour, selectedValueMinute, onValueChangeMinute
                }) => {
    const { container, wrapField, background, styleButton, pickerStyle, wrapPicker } = styles;
    const loopHour = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', 
                '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
    const loopMinute = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', 
                '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', 
                '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', 
                '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', 
                '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];
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
                            {loopHour.map((value, i) => 
                            <Picker.Item key={i} label={value} value={value} />)}
                        </Picker>
                        <Picker
                        selectedValue={selectedValueMinute}
                        onValueChange={onValueChangeMinute}
                        style={pickerStyle}
                        >
                            {loopMinute.map((value, i) => 
                            <Picker.Item key={i} label={value} value={value} />)}
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
