import axios from 'axios';

const campersInstants = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

export const getCampersApi = async () => {
  const { data } = await campersInstants.get('/campers');
  return data;
};
