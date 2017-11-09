// import { REHYDRATE } from 'redux-persist/lib/constants';
import { ADD_LIST } from '../actions/types';


const mainReducers = (state = [], action) => {
    switch (action.type) {
        // case REHYDRATE:
        //  return action.payload.completeStore;
        case ADD_LIST:
         return [ 
             ...state, 
            {
                text: action.text,
                hour: action.hour,
                minute: action.minute
            }
         ];
        default:
         return state;
    }
};

export default mainReducers;
