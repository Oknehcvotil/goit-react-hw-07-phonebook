import { createSlice } from '@reduxjs/toolkit';

const initialFilter = {
  filter: '',
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
