import { ADD_LIST } from '../actions/types';

const initialState = {
  listAlarm: []
}

export const listReducers = (state = initialState, action) => {
  const { listAlarm } = state;

  const { type, payload } = action;
  switch (type) {
    case ADD_LIST: {
      return {
        ...state,
        listAlarm: [payload, ...listAlarm]
      }
    }
  }
}