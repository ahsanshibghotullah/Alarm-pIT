import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Main from './src/Main';

const RouterComponent = () => {
    return (
        <Router>
            <Scene hideNavBar>
                <Scene key="main" component={Main} title="Alarm" initial />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
