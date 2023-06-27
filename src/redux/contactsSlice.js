import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fn,
  handleFulfilled,
  handleFulfilledAdd,
  handleFulfilledDelete,
  handleFulfilledGet,
  handlePending,
  handleRejected,
} from 'services/functionSlice';
import { initialContacts } from './initialState';
import { addContactThunk, deleteContactThunk, getContactsThunk } from './thunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  extraReducers: builder => {
    builder
      //   .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      //   .addCase(getContactsThunk.rejected, handleRejected)
      //   .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
      //   .addCase(addContactThunk.rejected, handleRejected)
      //   .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      //   .addCase(deleteContactThunk.rejected, handleRejected)
      .addMatcher(
        isAnyOf(
          ...fn('pending')
          //   getContactsThunk.pending,
          //   addContactThunk.pending,
          //   deleteContactThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          ...fn('rejected')
          //   getContactsThunk.rejected,
          //   addContactThunk.rejected,
          //   deleteContactThunk.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          ...fn('fulfilled')
          //   getContactsThunk.fulfilled,
          //   addContactThunk.fulfilled,
          //   deleteContactThunk.fulfilled
        ),
        handleFulfilled
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
