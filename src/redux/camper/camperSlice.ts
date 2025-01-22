import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCamperById } from './camperOperations';
import { Camper } from 'shared/types';

type CamperInitialState = {
  camper: null | Camper;
  isLoading: boolean;
  error: string | null;
};

const initialState: CamperInitialState = {
  camper: null,
  isLoading: false,
  error: null,
};

const camperSlice = createSlice({
  name: 'camper',
  initialState,
  reducers: {
    resetCamper: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCamperById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getCamperById.fulfilled,
        (state, { payload }: PayloadAction<Camper>) => {
          state.isLoading = false;
          state.camper = payload;
        }
      )
      .addCase(getCamperById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload || 'Failed to fetch camper';
      });
  },
});

export const { resetCamper } = camperSlice.actions;

export const camperReducer = camperSlice.reducer;
