import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-sispar-93cw.onrender.com',
});

export default api;
