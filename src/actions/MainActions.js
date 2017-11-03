import { UPDATE_ALARM, ADD_LIST } from './types';

export const updateAlarm = ({ prop, value }) => {
    return {
        type: UPDATE_ALARM,
        payload: { prop, value }
    };
};

export const addList = ({ text, hour, minute }) => {
    return {
        type: ADD_LIST,
        payload: { text, hour, minute }
    };
};
