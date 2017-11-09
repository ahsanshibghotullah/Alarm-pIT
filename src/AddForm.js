import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { addList, updateAlarm, emptyAddForm } from './actions';
import { Field, Button } from './component';

// visible, value, onChangeText, onPress,
// selectedValueHour, onValueChangeHour, selectedValueMinute, onValueChangeMinute
class AddForm extends Component {
    state = {
        text: '',
        minute: 0,
        hour: 0,
    }

    componentWillMount() {
        this.props.emptyAddForm();
    }

    //Maksimal update 2 makanya pindah ke onButtonPress
    // componentWillReceiveProps() {
    //     const text = this.props.text;
    //     const hour = this.props.hour;
    //     const minute = this.props.minute;
    //     this.setState({ text, hour, minute });
    // }

    onButtonAddPress() {
        const { text, hour, minute } = this.props;
        // console.log({ text, hour, minute });
        this.props.addList({ text, hour, minute });
        Actions.main();
        // this.setState({ text: '', minute: 0, hour: 0 });
    }

    render() {
        const { container, wrapField, background, styleButton, pickerStyle, wrapPicker } = styles;
        const loopHour = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', 
                    '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
        const loopMinute = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', 
                    '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', 
                    '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', 
                    '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', 
                    '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];
        // console.log(this.props.text, this.props.hour, this.props.minute);
        return (
            <View style={container}>
                <View style={background}>
                    <View style={wrapField}>
                        <Field 
                        label="Label"
                        placeholder="..."
                        autoCorrect
                        onChangeText={value => {
                        this.props.updateAlarm({ prop: 'text', value });
                        this.setState({ text: value });
                        }}
                        value={this.props.text}
                        />
                    </View>

                    <View style={wrapPicker}>
                        <Picker
                        selectedValue={this.props.hour}
                        onValueChange={value => {
                        this.props.updateAlarm({ prop: 'hour', value });
                        this.setState({ hour: value });
                        }}
                        style={pickerStyle}
                        >
                            {/* {this.props.pickerHour} */}
                            {loopHour.map((value, i) => 
                            <Picker.Item key={i} label={value} value={value} />)}
                        </Picker>
                        <Picker
                        selectedValue={this.props.minute}
                        onValueChange={value => {
                        this.props.updateAlarm({ prop: 'minute', value });
                        this.setState({ minute: value });
                        }}
                        style={pickerStyle}
                        >
                            {loopMinute.map((value, i) => 
                            <Picker.Item key={i} label={value} value={value} />)}
                        </Picker>
                    </View>
                    {/* tombol buat nambahin list */}
                    <Button
                    onPress={this.onButtonAddPress.bind(this)}
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

const mapStateToProps = state => {
    const { text, hour, minute } = state.updateReducers;
    return { text, hour, minute };
};

export default connect(mapStateToProps, { addList, updateAlarm, emptyAddForm })(AddForm);
