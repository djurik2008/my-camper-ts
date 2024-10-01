import { createAsyncThunk } from '@reduxjs/toolkit';
import { campersApi } from 'services/index';

export const getCampers = createAsyncThunk(
  'campers/get',
  async (_, { rejectWithValue }) => {
    try {
      const campersList = await campersApi.getCampersApi();
      return campersList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const { campersList } = getState().campers;
      return campersList.length === 0;
    },
  }
);
