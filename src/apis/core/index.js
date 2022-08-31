import axios from 'axios';

// [Temp] API개발완료되면 적용
const BASE_URL = null; // process.env.REACT_APP_BASE_URL

const ococ = axios.create({
  headers: { Accept: 'application/json' },
  baseURL: BASE_URL,
});

export default ococ;
