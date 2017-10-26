import React, { Component } from 'react';
import { View, Text, AppState } from 'react-native';
import PushNotification from 'react-native-push-notification';
import PushController from './PushController';

class List extends Component {
    constructor(props) {
        super(props);
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
        this.state = {
            text: '',
            hour: '',
            minute: '',
        };
    }

    componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            text: nextProps.rowData.text,
            hour: nextProps.rowData.hour,
            minute: nextProps.rowData.minute,
        });
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }
    
    handleAppStateChange(appState) {
        const alarm = this.state.hour
    if (appState === 'background') {
        PushNotification.localNotificationSchedule({
        message: "Bangun coy!", // (required)
        date: new Date(Date.now() + (this.state.seconds * 1000)), // in 60 secs
        // playSound: true,
        // soundName: 'doraemon.mp3',
        });
    }
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
                <PushController />
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
