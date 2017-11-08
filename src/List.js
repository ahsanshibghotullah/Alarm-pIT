import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import PushNotification from 'react-native-push-notification';

class List extends Component {
    // constructor(props) {
    //     super(props);
    //     PushNotification.configure({            
    //         onNotification: (notification) => {
    //             console.log('NOTIFICATION:', notification);
    //         }
    //     });

    //     const d = new Date();
    //     const date = (d.getHours() * 60) + (d.getMinutes());
        state = {
            text: '',
            hour: 0,
            minute: 0,
        };
    // }
    
    componentWillReceiveProps(nextProps) {
        const text = nextProps.text;
        const hour = nextProps.hour;
        const minute = nextProps.minute;
    //     // const hours = Number(hour);
    //     // const minutes = Number(minute);
        // console.log(text);

        this.setState({ text, hour, minute, });
    //     // this.handleNotification(hours, minutes);
    }

        // const schedule = (hour * 60) + minute;
        // const alarm = schedule - this.state.date;
        //     PushNotification.localNotificationSchedule({
        //     message: "Bangun coy!", // (required)
        //     date: new Date(Date.now() + (alarm * 60000)) // in minute
        //     });
        //     console.log(schedule);
        //     console.log(this.state.date);
        //     console.log(alarm);

    render() {
        const { text, hour, minute } = this.props;
        const { story, storyText, setTime } = styles;
        return (
            <View style={story}>
                <Text style={storyText}>
                    {text + '  '}
                    <Text style={setTime}>
                        {hour}:
                        {minute}
                    </Text>
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
    },
    storyText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: 'black',
        fontSize: 18,
        flexDirection: 'column',
    },
    setTime: {
        fontWeight: 'bold',
    },
};

export default List;
