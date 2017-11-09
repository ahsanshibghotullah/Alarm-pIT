import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/es/integration/react';
import { createStore } from 'redux';
import configureStore from './src/stores/configureStore';
import reducers from './src/reducers';
import Router from './Router';
// import Loading from './Loading';

// const { persistor, store } = configureStore();

// const onBeforeLift = () => {
//     // take some action before the gate lifts
// };
const store = createStore(reducers);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router /> 
            </Provider>
        );
    }
}

export default App;
