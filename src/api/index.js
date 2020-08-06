import axios from 'axios';
const baseURL = 'https://agendamaster-api.now.sh/';

export const client = axios.create({
  baseURL,
});

export const login = async (email, password) => {
  const res = await client.post('/auth/token', null, {
    auth: { username: email, password },
  });

  console.log(res);

  return res.data;
};
