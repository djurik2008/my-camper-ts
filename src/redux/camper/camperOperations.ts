import { createAsyncThunk } from '@reduxjs/toolkit';
import { campersApi } from 'services/index';
import { Camper } from 'shared/types';

export const getCamperById = createAsyncThunk<
  Camper,
  number,
  { rejectValue: string }
>('camper/get', async (camperId, { rejectWithValue }) => {
  try {
    const data = await campersApi.getCamperByIdApi(camperId);
    return data;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : 'An unknown error occurred'
    );
  }
});
