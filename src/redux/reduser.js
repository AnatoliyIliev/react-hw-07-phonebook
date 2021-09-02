import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactsRequest,
  addContactSuccess,
  addContactError,
  deleteContacts,
  changeFilter,
} from './actions';

const items = createReducer([], {
  [addContactSuccess]: (state, { payload }) => {
    const repeatСontact = state.some(contact => contact.name === payload.name);
    if (repeatСontact) {
      alert(`${payload.name} is already in contacts.`);
      return state;
    }

    return [...state, payload];
  },

  [deleteContacts]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactsRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
