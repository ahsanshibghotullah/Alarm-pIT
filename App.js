import React from 'react';
import { Provider } from 'react-redux';
import { Text } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { configureStore } from './src/stores/configureStore';
import Main from './src/Main';

const { persistor, store } = configureStore();

const onBeforeLift = () => {
    // take some action before the gate lifts
};

const Loading = () => {
    return (
        <Text>Loading page..</Text>
    );
};

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate
            loading={Loading}
            onBeforeLift={onBeforeLift}
            persistor={persistor}
            >
                <Main /> 
            </PersistGate>   
        </Provider>
    );
};

export default App;
