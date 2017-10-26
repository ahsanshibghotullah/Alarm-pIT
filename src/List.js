import React, { Component } from 'react';
import { View, Text } from 'react-native';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            hour: '',
            minute: '',
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
          text: nextProps.rowData.text,
          hour: nextProps.rowData.hour,
          minute: nextProps.rowData.minute,
        });
    }

    render() {
        // const { text, hour, minute } = this.props.rowData;
        const { story, storyText } = styles;
        return (
            <View style={story}>
                <Text style={storyText}>
                    {this.state.text}
                </Text>
                <Text style={storyText}>
                    {this.state.hour}
                </Text>
                <Text style={storyText}>
                    {this.state.minute}
                </Text>
            </View>
        );
    }
}

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
