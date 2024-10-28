import { createSlice } from '@reduxjs/toolkit';
import { getCamperById } from './camperOperations';

const camperSlice = createSlice({
  name: 'camper',
  initialState: {
    camper: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCamperById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCamperById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.camper = payload;
      })
      .addCase(getCamperById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const camperReducer = camperSlice.reducer;
