import { createAsyncThunk } from '@reduxjs/toolkit';
import { campersApi } from 'services/index';

export const getAllCampers = createAsyncThunk(
  'campers/get',
  async (_, { rejectWithValue }) => {
    try {
      const { items } = await campersApi.getAllCampers();
      return items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const { list } = getState().campers;
      return list.length === 0;
    },
  }
);

export const getCampersByParams = createAsyncThunk(
  'campersByParams/get',
  async (params, { rejectWithValue }) => {
    try {
      const { items } = await campersApi.getCampersByParamsApi(params);
      return items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
