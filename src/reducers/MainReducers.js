// import { REHYDRATE } from 'redux-persist/lib/constants';
import { UPDATE_ALARM, ADD_LIST } from '../actions/types';


const INITIAL_STATE = {
    listOfTasks: [],
    text: '',
    hour: 0,
    minute: 0,
    date: 0,
    
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case REHYDRATE:
        //  return action.payload.completeStore;
        case UPDATE_ALARM:
         return { ...state, [action.payload.prop]: action.payload.value };
        case ADD_LIST:
         return { ...state, listOfTasks: [...state.listOfTasks, action.payload] };
        default:
         return state;
    }
};
