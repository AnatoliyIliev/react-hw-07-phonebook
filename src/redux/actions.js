import { createAction } from '@reduxjs/toolkit';

export const addContactsRequest = createAction('contact/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contact/addContactError');

export const deleteContactsRequest = createAction('contact/addContactRequest');
export const deleteContactSuccess = createAction('contacts/addContactSuccess');
export const deleteContactError = createAction('contact/addContactError');

export const changeFilter = createAction('contacts/changeFilter');

//
