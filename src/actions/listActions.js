import { LIST_ADD, LIST_CREATE } from './types';
import { Asynstorage } from 'react-native';

export const listAdd = ({ prop, value }) => {
  return {
    type: LIST_ADD,
    payload: { prop, value }
  };
};

export const listCreate = () => {
  return {
    type: LIST_CREATE
  }
}