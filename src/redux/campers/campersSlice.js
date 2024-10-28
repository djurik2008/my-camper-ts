import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getAllCampers, getCampersByParams } from './campersOperations';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    page: 1,
    prevPage: null,
    total: 0,
    selected: [],
    error: null,
    isLoading: false,
  },
  reducers: {
    setPage: (state, { payload }) => {
      state.prevPage = state.page;
      state.page = payload;
    },
    clearCampers: (state) => {
      state.items = [];
      state.page = 1;
      state.prevPage = null;
      state.total = 0;
    },
    changeSelected(state, { payload }) {
      const isAlreadySelected = state.selected.includes(payload);
      if (isAlreadySelected) {
        state.selected = state.selected.filter((id) => id !== payload);
      } else {
        state.selected.push(payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getAllCampers.fulfilled,
        (state, { payload: { items, total } }) => {
          state.isLoading = false;
          state.items = items;
          state.total = total;
        }
      )
      .addCase(getAllCampers.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to fetch campers';
      })
      .addCase(getCampersByParams.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getCampersByParams.fulfilled,
        (state, { payload: { items, total } }) => {
          state.isLoading = false;
          state.items?.length
            ? (state.items = [...state.items, ...items])
            : (state.items = items);
          // state.items = items;
          state.total = total;
        }
      )
      .addCase(getCampersByParams.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload || 'Failed to fetch campers';
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

export const { setPage, clearCampers, changeSelected } = campersSlice.actions;
