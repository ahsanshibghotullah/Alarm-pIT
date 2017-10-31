import _ from 'lodash';
import React, { Component } from 'react';
import { View, AsyncStorage, ListView, Text } from 'react-native';
import { Button } from './component';
import AddForm from './AddForm';
import List from './List';

class Main extends Component {
    constructor(props) {
        super(props);

        const d = new Date();
        const date = (d.getHours() * 60) + (d.getMinutes());
        this.state = {
          ds: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          listOfTasks: [],
          showModal: false,
          id: {
            text: '',
            hour: 0,
            minute: 1,
            date,
          },
          isReady: false,
        };
      }

    componentDidMount() {
        this.onUpdateList();
    }

    async onAddTask() {
        // const key = this.state.id.text;
        const listOfTasks = [...this.state.listOfTasks, 
            this.state.id];
        if (this.state.id.text !== '') {
        await AsyncStorage.setItem('listOfTasks', JSON.stringify(listOfTasks));
        this.setState({ showModal: false });
        this.onUpdateList();
        }
        this.setState({ showModal: false });
    }

    async onDeleteList() {      
        await AsyncStorage.removeItem('listOfTasks');
        this.onUpdateList(); 
    }

    async onUpdateList() {
        const response = await AsyncStorage.getItem('listOfTasks');
        const listOfTasks = await JSON.parse(response) || [];
        console.log(listOfTasks);
        
        this.setState({
          listOfTasks, isReady: true
        });
        this.onChangeTextInputValue('');
      }

    onChangeTextInputValue(text) {
        this.setState({
          id: Object.assign({}, this.state.id, {
            text,
          }),
        });
    }

    renderRowData(rowData) {
        return (
          <List rowData={rowData} />
        );
    }

    render() {
        const listData = _.map(this.state.listOfTasks, (val, uid) => { return { ...val, uid }; });
        const dataSource = this.state.ds.cloneWithRows(listData);
        const { containerStyle, styleWrapButton, styleButton, styleText } = styles;
        const { isReady } = this.state;
        if (isReady) {
            return (
                <View style={containerStyle}>
                    <View style={{ flex: 1 }}>
                        <ListView
                        dataSource={dataSource}
                        enableEmptySections
                        renderRow={rowData => this.renderRowData(rowData)}
                        />
                        <AddForm 
                        visible={this.state.showModal}
                        onPress={this.onAddTask.bind(this)}
                        onChangeText={text => this.onChangeTextInputValue(text)}
                        value={this.state.id.text}
                        onValueChangeHour={hour => 
                        this.setState({ id: Object.assign({}, this.state.id, { hour, }), })}
                        selectedValueHour={this.state.id.hour}
                        onValueChangeMinute={minute => 
                        this.setState({ id: Object.assign({}, this.state.id, { minute, }), })}
                        selectedValueMinute={this.state.id.minute}
                        />

                        <View style={styleWrapButton}>
                            {/* tombol buat pindah ke Add Form */}
                            <Button
                            styleButton={styleButton}
                            styleText={styleText}
                            onPress={() => this.setState({ showModal: true })}
                            >
                            +
                            </Button>
                            <Button
                            styleButton={[styleButton, styles.paddingButton]}
                            styleText={styleText}
                            onPress={() => this.onDeleteList()}
                            >
                            -
                            </Button>
                            {/* 
                            // Akses id[0].text
                            <Text>{this.state.listOfTasks[0].text}</Text> 
                            */}
                        </View>
                    </View>
                </View>
            );
        }
        return (
            <Text>belon</Text>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
    },
    styleWrapButton: {
        marginRight: 20,
        marginBottom: 50,
        position: 'absolute',
        flexDirection: 'row',
        bottom: 0,
        right: 0,
    },
    styleButton: {
        borderColor: 'black',
        borderRadius: 40,
        width: 50,
        height: 50,
        borderWidth: 1,
        backgroundColor: 'black',
    },
    paddingButton: {
        
    },
    styleText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
};

export default Main;
