import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getAllCampers, getCampersByParams } from './campersOperations';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    list: [],
    selected: [],
    error: null,
    isLoading: false,
  },
  reducers: {
    changeSelected(state, { payload }) {
      const isAlreadySelected = state.selected.includes(payload);
      if (isAlreadySelected) {
        const filteredCamps = state.selected.filter((id) => id !== payload);
        state.selected = filteredCamps;
      } else {
        state.selected.push(payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCampers.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.error = null;
      })
      .addCase(getAllCampers.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to fetch campers';
      })
      .addCase(getCampersByParams.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCampersByParams.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.list = payload;
      })
      .addCase(getCampersByParams.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch campers';
      });
  },
});

const campersPersistConfig = {
  key: 'campers',
  storage,
  whitelist: ['selected'],
};

export const persistedCampersReducer = persistReducer(
  campersPersistConfig,
  campersSlice.reducer
);

export const { changeSelected } = campersSlice.actions;
