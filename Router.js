import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Main from './src/Main'
import AddForm from './src/AddForm';

const RouterComponent = () => {
    return (
        <Router>
            <Scene hideNavBar>
                <Scene key="main" component={Main} title="Alarm" initial />
                <Scene key="add" component={AddForm} title="Add Alarm" />
                
            </Scene>
        </Router>
    );
};

export default RouterComponent;
