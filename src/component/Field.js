import React from 'react';
import { View, Text, TextInput } from 'react-native';


const Field = ({ 
    label, placeholder, secureTextEntry, autoCorrect, value, onChangeText, styleContainer, styleLabel, styleTextInput
                }) => {
    const { containerStyle, labelStyle, textInputStyle } = styles;
    return (
        <View style={[containerStyle, styleContainer]}>
            <Text style={[labelStyle, styleLabel]}>{label}</Text>
            <TextInput
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            autoCorrect={autoCorrect}
            value={value}
            onChangeText={onChangeText}
            style={[textInputStyle, styleTextInput]}
            />
        </View>
    );
}

const styles ={
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
    },
    labelStyle: {
        fontSize: 16,
    },
    textInputStyle: {
        fontSize: 16,
        lineHeight: 23,
    }
}

export { Field };
