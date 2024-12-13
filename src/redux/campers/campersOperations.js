import { createAsyncThunk } from '@reduxjs/toolkit';
import { campersApi } from 'services/index';

export const getCampersByParams = createAsyncThunk(
  'campers/getCampersByParams',
  async (params, { rejectWithValue }) => {
    try {
      const data = await campersApi.getCampersByParamsApi(params);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
