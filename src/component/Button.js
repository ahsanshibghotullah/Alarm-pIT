import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, styleButton,styleText }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity
        onPress={onPress}
        style={[ buttonStyle, styleButton ]}
        >
            <Text style={[ textStyle, styleText ]}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 18,
    }

}

export default Button;
