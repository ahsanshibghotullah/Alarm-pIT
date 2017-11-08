import _ from 'lodash';
import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Button } from './component';
import { addList } from './actions';
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

    renderRowData({ item }) {
        return (
          <List 
          text={item.text}
          hour={item.hour}
          minute={item.minute}
          />
        );
    }

    render() {
        console.log(this.props.listOfTasks);
        const { containerStyle, styleWrapButton, styleButton, styleText } = styles;
       
        return (
            <View style={containerStyle}>
                <View style={{ flex: 1 }}>
                    <FlatList
                    data={this.props.listOfTasks}
                    renderItem={this.renderRowData}
                    keyExtractor={item => item.uid}
                    />
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

const mapStateToProps = state => {
    const listOfTasks = _.map(state.MainR.listOfTasks, (val, uid) => {
        return { ...val, uid };
    });
    // const aku = JSON.stringify(state.MainR.listOfTasks);
    // const { listOfTasks } = state.MainR;
    return { listOfTasks };
};

export default connect(mapStateToProps, { addList, })(Main);
