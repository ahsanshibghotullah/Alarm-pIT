import { combineReducers } from 'redux';
import addFormReducers from './addFormReducers';

export default combineReducers({
  addForm: addFormReducers, 
})