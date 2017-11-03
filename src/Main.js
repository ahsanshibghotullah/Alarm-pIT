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

    onAddTask() {
        const text = this.props.text;
        const hour = this.props.hour;
        const minute = this.props.minute;
        if (text !== '') {
        this.setState({ showModal: false });
            this.props.addList({ text, hour, minute });
        }
        this.setState({ showModal: false });
    }

    renderRowData(rowData) {
        return (
          <List rowData={rowData} />
        );
    }

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
                        > + </Button>
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
    // const text = _.map(state.Main.id.text, (val, uid) => {
    //     return { ...val, uid };
    // });
    // const hour = _.map(state.Main.id.hour, (val, uid) => {
    //     return { ...val, uid };
    // });
    // const minute = _.map(state.Main.id.minute, (val, uid) => {
    //     return { ...val, uid };
    // });
    const { text, minute, hour, } = state.MainR;
    const { listOfTasks } = state.MainR;
    return { text, minute, hour, listOfTasks };
};

export default connect(mapStateToProps, { updateAlarm, addList })(Main);
