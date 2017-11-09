import { combineReducers } from 'redux';
import mainReducers from './mainReducers';
import updateReducers from './updateReducers';

export default combineReducers({
    mainReducers,
    updateReducers
});
