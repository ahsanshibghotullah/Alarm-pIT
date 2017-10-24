import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from './component';

import { addList } from './actions/listActions';
class Main extends Component {
    onAddList = (teks) => {
        const { dispatch } = this.props;

        dispatch(addList(teks))
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
                    onPress={this.onAddList}
                    >
                    +
                    </Button>
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
