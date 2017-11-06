// import { REHYDRATE } from 'redux-persist/lib/constants';
import { ADD_LIST, UPDATE_ALARM, EMPTY_ADD_FORM } from '../actions/types';


const INITIAL_STATE = {
    listOfTasks: [],
    text: '',
    hour: 0,
    minute: 0,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case REHYDRATE:
        //  return action.payload.completeStore;
        case UPDATE_ALARM:
         return { ...state, [action.payload.prop]: action.payload.value };
        case EMPTY_ADD_FORM:
         return INITIAL_STATE;
        // case ADD_LIST:
        //  return { ...state, listOfTasks: [...state.listOfTasks, action.payload] };
        default:
         return state;
    }
};
