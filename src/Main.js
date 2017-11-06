// import _ from 'lodash';
import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import { connect } from 'react-redux';
import { Button } from './component';
// import { updateAlarm, addList } from './actions';
import List from './List';

class Main extends Component {
    // componentWillMount() {
    //     this.createDataSource(this.props);
    // }

    // componentWillReceiveProps(nextProps) {

    //     this.createDataSource(nextProps);
    // }

    // createDataSource({ listOfTasks }) {
    //     const ds = new ListView.DataSource({
    //         rowHasChanged: (r1, r2) => r1 !== r2
    //     });

    //     this.dataSource = ds.cloneWithRows(listOfTasks);
    // }

    // renderRowData(rowData) {
    //     return (
    //       <List rowData={rowData} />
    //     );
    // }

    render() {
        // console.log(this.props.listOfTasks);
        const { containerStyle, styleWrapButton, styleButton, styleText } = styles;
        return (
            <View style={containerStyle}>
                <View style={{ flex: 1 }}>
                    {/* <ListView 
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRowData}
                    /> */}
                    <View style={styleWrapButton}>
                        <Button
                        styleButton={styleButton}
                        styleText={styleText}
                        onPress={() => Actions.add()}
                        > + </Button>
                        <Button
                        styleButton={[styleButton, styles.paddingButton]}
                        styleText={styleText}
                        onPress={() => {}}
                        > - </Button>
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

// const mapStateToProps = state => {
//     const listOfTasks = _.map(state.MainR, (val, uid) => {
//         return { ...val, uid };
//     });
//     // const { listOfTasks } = state.MainR;
//     return { listOfTasks };
// };

export default Main;
