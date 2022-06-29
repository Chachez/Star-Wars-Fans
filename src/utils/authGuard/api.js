import axios from 'axios';

// Create an instance of axios
const { REACT_APP_URL } = process.env;
const api = axios.create({
  baseURL: REACT_APP_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default api;
