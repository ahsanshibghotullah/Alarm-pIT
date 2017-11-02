import _ from 'lodash';
import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Button } from './component';
import { updateAlarm, addList } from './actions';
import AddForm from './AddForm';
import List from './List';

class Main extends Component {
    constructor(props) {
        super(props);

        // const d = new Date();
        // const date = (d.getHours() * 60) + (d.getMinutes());
        this.state = {
          ds: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          showModal: false,
        };
      }

    //   componentWillMount() {
    //     this.props.storyFetch();
    //     this.createDataSource(this.props);
    // }

    // componentWillReceiveProps(nextProps) {
    //     this.createDataSource(nextProps);
    // }

    onAddTask() {
        // const key = this.state.id.text;
        // const listOfTasks = [...this.state.listOfTasks, 
        //     this.state.id];
        if (this.state.id.text !== '') {
        // await AsyncStorage.setItem('listOfTasks', JSON.stringify(listOfTasks));
        this.setState({ showModal: false });
        // this.onUpdateList();
            this.props.addList();
        }
        this.setState({ showModal: false });
    }

    // createDataSource({ storys }) {
    //     const ds = new ListView.DataSource({
    //         rowHasChanged: (r1, r2) => r1 !== r2
    //     });
    //     this.dataSource = ds.cloneWithRows(storys);
    // }

    renderRowData(rowData) {
        return (
          <List rowData={rowData} />
        );
    }
    // componentDidMount() {
    //     this.onUpdateList();
    // }

    // async onDeleteList() {      
    //     await AsyncStorage.removeItem('listOfTasks');
    //     this.onUpdateList(); 
    // }

    // async onUpdateList() {
    //     const response = await AsyncStorage.getItem('listOfTasks');
    //     const listOfTasks = await JSON.parse(response) || [];
    //     console.log(listOfTasks);
        
    //     this.setState({
    //       listOfTasks, isReady: true
    //     });
    //     this.onChangeTextInputValue('');
    //   }

    // onChangeTextInputValue(text) {
    //     this.setState({
    //       id: Object.assign({}, this.state.id, {
    //         text,
    //       }),
    //     });
    // }

    render() {
        const listData = _.map(this.props.listOfTasks, (val, uid) => { return { ...val, uid }; });
        const dataSource = this.state.ds.cloneWithRows(listData);
        const { containerStyle, styleWrapButton, styleButton, styleText } = styles;
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
                    ///
                    onChangeText={value => this.props.updateAlarm({ prop: 'text', value })}
                    ////
                    value={this.props.text}
                    onValueChangeHour={value => this.props.updateAlarm({ prop: 'hour', value })}
                    selectedValueHour={this.props.hour}
                    onValueChangeMinute={value => this.props.updateAlarm({ prop: 'minute', value })}
                    selectedValueMinute={this.props.minute}
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

const mapStateToProps = state => {
    const { text, minute, hour, } = state.Main.id;
    const { listOfTasks } = state.Main;
    return { text, minute, hour, listOfTasks };
};

export default connect(mapStateToProps, { updateAlarm, addList })(Main);
