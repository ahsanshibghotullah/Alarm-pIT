import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Text, AppState, AsyncStorage } from 'react-native';
import { createStore } from 'redux';
import Main from './src/Main';
import reducers from './src/reducers';

const store = createStore(reducers);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSoteLodaing: false,
            store,
        };
    }

    componentWillMount() {
        AppState.addEventListener('change', this.handleAppStateChange.bind(this));
        this.setState({ isSoteLodaing: true });
        AsyncStorage.getItem('completeStore').then(value => {
            if (value && value.length) {
                const initialStore = JSON.parse(value);
                this.setState({ store: createStore(reducers, initialStore) });
            } else {
                this.setState({ store });
            }
            this.setState({ isSoteLodaing: false });
        }).catch((error) => {
            this.setState({ isSoteLodaing: false, store });
        });
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange.bind(this));
    }

    handleAppStateChange(currentAppState) {
        const storingValue = JSON.stringify(this.state.store.getState())
        AsyncStorage.setItem('completeStore', storingValue);
      }

    render() {
        const load = this.state.isSoteLodaing;
        if (load) {
            return <Text>Loading Store..</Text>;
        }
        return (
            <Provider store={store}>
                <Main />    
            </Provider>
        );
    }
}

export default App;
