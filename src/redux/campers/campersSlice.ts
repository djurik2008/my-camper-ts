import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getCampersByParams } from './campersOperations';
import { Camper } from 'shared/types';

type CampersInitialState = {
  items: Camper[] | [];
  page: number;
  total: number;
  totalPages: number;
  selected: string[];
  error: string | null;
  isLoading: boolean;
};

const initialState: CampersInitialState = {
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
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    clearCampers: () => initialState,
    changeSelected(state, { payload }: PayloadAction<string>) {
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
          state.items = state.items?.length
            ? [...state.items, ...items]
            : items;
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
