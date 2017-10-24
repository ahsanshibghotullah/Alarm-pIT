import { ADD_LIST } from './types';

export const addList = ({ teks }) => {
  return { ADD_LIST, payload: teks };
}