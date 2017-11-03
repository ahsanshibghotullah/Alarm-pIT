import { createStore, compose } from 'redux';
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

const reducerses = persistCombineReducers(config, {
  reducers,
});

export const configureStore = () => {
  const store = createStore(
    reducerses,
    compose()
  );
  const persistor = persistStore(store);

  return { persistor, store };
};
