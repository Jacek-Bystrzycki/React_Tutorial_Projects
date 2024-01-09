import axios from 'axios';

export const readData = axios.create({
  baseURL: 'http://localhost:5000/api/v1/tasks',
  headers: {
    Accept: 'application.json',
  },
});
