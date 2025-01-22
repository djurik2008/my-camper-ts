import axios from 'axios';
import { CampersParams, Camper, CampersResponse } from 'shared/types';

const defaultParams: CampersParams = {
  page: 1,
  limit: 4,
  location: '',
  form: '',
  transmission: '',
  kitchen: '',
  TV: '',
  AC: '',
  bathroom: '',
};

const campersInstants = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
  params: defaultParams,
});

export const getCampersByParamsApi = async (
  params: Partial<CampersParams>
): Promise<CampersResponse> => {
  const { data } = await campersInstants.get<CampersResponse>('/campers', {
    params: { ...campersInstants.defaults.params, ...params },
  });
  return data;
};

export const getCamperByIdApi = async (id: number): Promise<Camper> => {
  const { data } = await campersInstants.get<Camper>(`/campers/${id}`, {
    params: null,
  });
  return data;
};
