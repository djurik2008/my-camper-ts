import { createAsyncThunk } from '@reduxjs/toolkit';
import { campersApi } from 'services/index';
import { CampersParams, CampersResponse } from 'shared/types';

type Params = Partial<CampersParams>;

export const getCampersByParams = createAsyncThunk<
  CampersResponse,
  Params,
  { rejectValue: string }
>('campers/getCampersByParams', async (params, { rejectWithValue }) => {
  try {
    const data = await campersApi.getCampersByParamsApi(params);
    return data;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : 'An unknown error occurred'
    );
  }
});
