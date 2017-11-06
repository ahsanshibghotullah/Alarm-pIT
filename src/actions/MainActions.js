import { ADD_LIST, UPDATE_ALARM, EMPTY_ADD_FORM } from './types';

export const updateAlarm = ({ prop, value }) => {
    return {
        type: UPDATE_ALARM,
        payload: { prop, value }
    };
};

export const emptyAddForm = () => {
    return {
        type: EMPTY_ADD_FORM,
    };
};

export const addList = ({ text, hour, minute, }) => {
    return {
        type: ADD_LIST,
        payload: { text, hour, minute, }
    };
};
