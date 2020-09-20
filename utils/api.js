import axios from 'axios';

const $http = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization = `Bearer ${process.env.API_KEY}`,
  },
});

export default $http;