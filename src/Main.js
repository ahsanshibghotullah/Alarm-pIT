import React, { Component } from 'react';
import { View, AsyncStorage, Text, ListView } from 'react-native';
import { Button } from './component';
import AddForm from './AddForm';
import List from './List';

class Main extends Component {
    constructor(props) {
        super(props);
    
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
    
        this.state = {
          ds: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          listOfTasks: [],
          text: '',
          showModal: false
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
        const listOfTasks = [...this.state.listOfTasks, this.state.text];
    
        await AsyncStorage.setItem('listOfTasks', JSON.stringify(listOfTasks));
    
        this.onUpdateList();
    }

    async onUpdateList() {
        const response = await AsyncStorage.getItem('listOfTasks');
        const listOfTasks = await JSON.parse(response) || [];
    
        this.setState({
          listOfTasks
        });
    
        this.onChangeTextInputValue('');
      }

    onChangeTextInputValue(text) {
        this.setState({
          text
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
                <View style={styleWrapButton}>
                    {/* tombol buat pindah ke Add Form */}
                    <ListView
                    dataSource={dataSource}
                    enableEmptySections
                    renderRow={rowData => this.renderRowData(rowData)}
                    />
                    <Button
                    styleButton={styleButton}
                    styleText={styleText}
                    onPress={() => this.setState({ showModal: true })}
                    >
                    +
                    </Button>
                    <AddForm 
                    visible={this.state.showModal}
                    onPress={this.onAddPress.bind(this)}
                    onChangeText={text => this.onChangeTextInputValue(text)}
                    value={this.state.text}
                    />
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
