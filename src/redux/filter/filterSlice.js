import { createSlice } from '@reduxjs/toolkit';

const initialFilter = {
  location: '',
  AC: false,
  transmission: '',
  kitchen: false,
  TV: false,
  bathroom: false,
  form: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: initialFilter,
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    clearFilter: (state) => {
      state.filter = initialFilter;
    },
  },
});

export const filterReduser = filterSlice.reducer;
export const { setFilter, clearFilter } = filterSlice.actions;
