import axios from 'axios';
const baseURL = 'http://localhost:8000/api';

export const client = axios.create({
  baseURL,
});

export const login = async (email, password) => {
  const res = await client.post('/auth/token', null, {
    auth: { username: email, password },
  });

  return res.data;
};
