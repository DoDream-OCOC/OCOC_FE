import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ococ = axios.create({
  headers: { Accept: 'application/json' },
  baseURL: BASE_URL,
});

export default ococ;
