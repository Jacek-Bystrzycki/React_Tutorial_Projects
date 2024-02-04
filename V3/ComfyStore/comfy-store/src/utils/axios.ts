import axios, { AxiosInstance } from 'axios';

const productionUrl: string = 'https://strapi-store-server.onrender.com/api';

export const customFetch: AxiosInstance = axios.create({
  baseURL: productionUrl,
});
