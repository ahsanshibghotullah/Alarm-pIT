import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Router from './Router';
// import Loading from './Loading';

// const { persistor, store } = configureStore();

// const onBeforeLift = () => {
//     // take some action before the gate lifts
// };

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <Router /> 
        </Provider>
    );
};

export default App;
