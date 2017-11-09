import { UPDATE_ALARM, EMPTY_ADD_FORM } from '../actions/types';

const INITIAL_STATE = {
    text: '',
    hour: 0,
    minute: 0,
};

const updateReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case REHYDRATE:
        //  return action.payload.completeStore;
        case UPDATE_ALARM:
         return { ...state, [action.payload.prop]: action.payload.value };
        case EMPTY_ADD_FORM:
         return INITIAL_STATE;
        default:
         return state;
    }
};
export default updateReducers;
