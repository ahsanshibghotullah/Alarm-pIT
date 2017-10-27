import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PushNotification from 'react-native-push-notification';

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
        this.state = {
            text: 'a',
            hour: 0,
            minute: 0,
            date,
        };
    }
    
    componentWillReceiveProps(nextProps) {
        const text = nextProps.rowData.text;
        const hour = nextProps.rowData.hour;
        const minute = nextProps.rowData.minute;
        const hours = Number(hour);
        const minutes = Number(minute);

        this.setState({ text, hour, minute, });
        this.handleNotification(hours, minutes);
    }

    handleNotification(hour, minute) {
        const schedule = (hour * 60) + minute;
        const alarm = schedule - this.state.date;
            PushNotification.localNotificationSchedule({
            message: "Bangun coy!", // (required)
            date: new Date(Date.now() + (alarm * 60000)) // in minute
            });
            console.log(schedule);
            console.log(this.state.date);
            console.log(alarm);
    }

    render() {
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
