import { UPDATE_ALARM, ADD_LIST } from './types';

export const updateAlarm = ({ prop, value }) => {
    return {
        type: UPDATE_ALARM,
        payload: { prop, value }
    };
};

export const addList = () => {
    return {
        type: ADD_LIST
    };
};
