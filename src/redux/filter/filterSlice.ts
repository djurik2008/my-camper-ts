import { createSlice } from '@reduxjs/toolkit';
import { Filter } from 'shared/types';

export const initialFilter: Filter = {
  location: '',
  AC: '',
  transmission: '',
  kitchen: '',
  TV: '',
  bathroom: '',
  form: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: initialFilter,
  },
  reducers: {
    setFilter: (state, { payload }: { payload: Filter }) => {
      state.filter = payload;
    },
    clearFilter: (state) => {
      state.filter = initialFilter;
    },
  },
});

export const filterReduser = filterSlice.reducer;
export const { setFilter, clearFilter } = filterSlice.actions;
