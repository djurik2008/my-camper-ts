import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getCampers } from './campersOperations';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    list: [],
    selected: [],
    error: null,
  },
  reducers: {
    addToSelected(state, { payload }) {
      state.selected.push(payload);
    },
    removeFromSelected(state, { payload }) {
      const filteredCamps = state.selected.filter(({ id }) => id !== payload);
      state.selected = filteredCamps;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.error = null;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to fetch campers';
      });
  },
});

const campersPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['selected'],
};

export const persistedCampersReducer = persistReducer(
  campersPersistConfig,
  campersSlice.reducer
);

export const { addToSelected, removeFromSelected } = campersSlice.actions;
