import React from 'react';
import { View, Text } from 'react-native';

const List = ({ rowData }) => {
    const { story, storyText } = styles;
    return (
        <View style={story}>
            <Text style={storyText}>
                {rowData}
            </Text>
        </View>
    );
};

const styles = {
    story: {
        flex: 1,
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        flexDirection: 'column'
    },
    storyText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: 'black',
        fontSize: 18
    },
};

export default List;
