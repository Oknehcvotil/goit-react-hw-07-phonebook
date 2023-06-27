import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from 'api/contactsApi';

export const getContactsThunk = createAsyncThunk('contacts/get', () =>
  getContacts()
);

export const addContactThunk = createAsyncThunk('contacts/create', data =>
  addContact(data)
);

export const deleteContactThunk = createAsyncThunk('contacts/delete', id =>
  deleteContact(id)
);
