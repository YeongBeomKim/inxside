import axios from 'axios';

axios.defaults.withCredentials = true;

const defaultClient = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://api.velog.io',
  withCredentials: true,
});

export default defaultClient;
