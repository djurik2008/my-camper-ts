import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getCampersByParams } from './campersOperations';

const initialState = {
  items: [],
  page: 1,
  total: 0,
  totalPages: 0,
  selected: [],
  error: null,
  isLoading: false,
};

const limit = 4;

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    clearCampers: (state) => {
      state.items = [];
      state.page = 1;
      state.total = 0;
      state.totalPages = 0;
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
          state.total = total;
          state.totalPages = Math.ceil(total / limit);
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
