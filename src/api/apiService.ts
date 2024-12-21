import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const loginUser = async (username: string, password: string) => {
  const response = await api.post('/auth/login', { username, password });
  return response.data;
};

export default api;

