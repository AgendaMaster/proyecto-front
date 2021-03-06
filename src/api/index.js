import axios from 'axios';
const baseURL = 'https://agendamaster-api.now.sh/api';

// TODO: implement a better SDK

export const client = axios.create({
  baseURL
});

export const login = async (email, password) => {
  const res = await client.post('/auth/token', null, {
    auth: { username: email, password },
  });

  console.log('login:: ', res.data)
  return res.data;
};

export const signUp = async (formData) => {
  const res = await client.post('/users', formData);
  return res.data;
};

export const getEvents = async (token) => {
  

  const res = await client.get('/events', {
    headers: {
      Authorization: `Bearer ${token}`
  }});
  console.log('res.data', res.data)
  return res.data;
};
