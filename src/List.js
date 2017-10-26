import React from 'react';
import { View, Text } from 'react-native';

const List = ({ rowData }) => {
    // const { mystory, date } = this.props.story;
    const { story, storyText } = styles;
    return (
        <View style={story}>
            <Text style={storyText}>
                {rowData.text}
            </Text>
            <Text style={storyText}>
                {rowData.hour}
            </Text>
            <Text style={storyText}>
                {rowData.minute}
            </Text>
        </View>
    );
};

const styles = {
    story: {
        flex: 1,
        position: 'relative',
        padding: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        flexDirection: 'row',
    },
    storyText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: 'black',
        fontSize: 18,
    },
};

export default List;
