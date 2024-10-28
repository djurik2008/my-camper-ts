import { createAsyncThunk } from '@reduxjs/toolkit';
import { campersApi } from 'services/index';

export const getCamperById = createAsyncThunk(
  'camper/get',
  async (camperId, { rejectWithValue }) => {
    try {
      const data = await campersApi.getCamperByIdApi(camperId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
