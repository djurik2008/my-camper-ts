import { createAsyncThunk } from '@reduxjs/toolkit';
import { campersApi } from 'services/index';

export const getAllCampers = createAsyncThunk(
  'campers/get',
  async (_, { rejectWithValue }) => {
    try {
      const data = await campersApi.getAllCampers();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const { items } = getState().campers;
      return items.length === 0;
    },
  }
);

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
  // {
  //   condition(params, { getState }) {
  //     const { campers } = getState();

  //     const isLoadMore = params.page !== campers.prevPage;

  //     const isPageSame = campers.page === params.page;

  //     const hasCampers = campers.items.length > 0;
  //     console.log(isLoadMore, isPageSame, hasCampers);
  //     console.log(params.page, campers.prevPage);

  //     return isLoadMore || !(isPageSame && hasCampers);
  //   },
  // }
);
