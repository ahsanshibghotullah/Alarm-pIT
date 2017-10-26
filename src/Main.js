import React, { Component } from 'react';
import { View, AsyncStorage, ListView } from 'react-native';
import { Button } from './component';
import AddForm from './AddForm';
import List from './List';

class Main extends Component {
    constructor(props) {
        super(props);
    
        // const ds = new ListView.DataSource({
        //   rowHasChanged: (r1, r2) => r1 !== r2
        // });
    
        this.state = {
          ds: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          listOfTasks: [],
          showModal: false,
          id: {
            text: '',
            hour: 1,
            minute: 1,
          }
        };
      }

    componentDidMount() {
        this.onUpdateList();
    }

    onAddPress() {
        this.setState({ showModal: false });
        this.onAddTask();
    }

    async onAddTask() {
        const listOfTasks = [...this.state.listOfTasks, 
            this.state.id];
    
        await AsyncStorage.setItem('listOfTasks', JSON.stringify(listOfTasks));
    
        this.onUpdateList();
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
          listOfTasks
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
        const dataSource = this.state.ds.cloneWithRows(this.state.listOfTasks);
       const { containerStyle, styleWrapButton, styleButton, styleText } = styles;

        return (
            <View style={containerStyle}>
                <ListView
                dataSource={dataSource}
                enableEmptySections
                renderRow={rowData => this.renderRowData(rowData)}
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
                    <AddForm 
                    visible={this.state.showModal}
                    onPress={this.onAddPress.bind(this)}
                    onChangeText={text => this.onChangeTextInputValue(text)}
                    value={this.state.id.text}
                    onValueChangeHour={hour => 
                    this.setState({ id: Object.assign({}, this.state.id, { hour, }), })}
                    selectedValueHour={this.state.id.hour}
                    onValueChangeMinute={minute => 
                    this.setState({ id: Object.assign({}, this.state.id, { minute, }), })}
                    selectedValueMinute={this.state.id.minute}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
    },
    styleWrapButton: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 20,
        marginBottom: 50,
        flex: 1,
        position: 'absolute',
    },
    styleButton: {
        borderColor: 'black',
        borderRadius: 40,
        width: 80,
        height: 80,
        borderWidth: 1,
        backgroundColor: 'black',
    },
    paddingButton: {
        
    },
    styleText: {
        color: 'white',
        fontSize: 20,
    },
};

export default Main;
