import { createStore } from 'redux';
// import thunk from 'redux-thunk';
import {
  persistStore,
  persistCombineReducers,
} from 'redux-persist';
import { AsyncStorage } from 'react-native';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = persistCombineReducers(config, reducers);

const configureStore = () => {
  const store = createStore(reducer);
  const persistor = persistStore(store);

  return { persistor, store };
};

export default configureStore;
