import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactsRequest,
  addContactSuccess,
  addContactError,
  deleteContactsRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  fetchContactsRequest,
  fetchContactSuccess,
  fetchContactError,
} from './actions';

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    const repeatСontact = state.some(contact => contact.name === payload.name);
    if (repeatСontact) {
      alert(`${payload.name} is already in contacts.`);
      return state;
    }

    return [...state, payload];
  },

  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactsRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
