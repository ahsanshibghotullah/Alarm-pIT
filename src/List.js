import React, { Component } from 'react';
import { View, Text, AppState } from 'react-native';
import PushNotification from 'react-native-push-notification';
import PushController from './PushController';

class List extends Component {
    constructor(props) {
        super(props);
        PushNotification.configure({            
            onNotification: (notification) => {
                console.log('NOTIFICATION:', notification);
            }
        });

        const d = new Date();
        const date = (d.getHours() * 60) + (d.getMinutes());
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
        this.state = {
            text: 'a',
            hour: 0,
            minute: 0,
            date,
        };
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
        // PushNotification.configure({            
        //     onNotification: function (notification) {
        //         console.log('NOTIFICATION:', notification);
        //     }
        // });
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
        const schedule = (this.state.hour * 60) + this.state.minute;
        const alarm = schedule - this.state.date;
        if (appState === 'background') {
            PushNotification.localNotificationSchedule({
            message: "Bangun coy!", // (required)
            date: new Date(Date.now() + (alarm * 60000)) // in minute
            // playSound: true,
            // soundName: 'doraemon.mp3',
            });
            console.log(alarm);
        }
    }
    // Math.abs(alarm)
    render() {
        // const { text, hour, minute } = this.props.rowData;
        const schedule = (this.state.hour * 60) + this.state.minute;
        const alarm = schedule - this.state.date;
        console.log(alarm);
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
