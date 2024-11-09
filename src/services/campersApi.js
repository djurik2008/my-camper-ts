import axios from 'axios';

const campersInstants = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
  params: {
    page: 1,
    limit: 4,
    location: '',
    form: '',
    transmission: '',
    kitchen: '',
    TV: '',
    AC: '',
    bathroom: '',
  },
});

export const getCampersByParamsApi = async (params = {}) => {
  const { data } = await campersInstants.get('/campers', {
    params: { ...campersInstants.defaults.params, ...params },
  });
  return data;
};

export const getCamperByIdApi = async (id) => {
  const { data } = await campersInstants.get(`/campers/${id}`, {
    params: null,
  });
  return data;
};
