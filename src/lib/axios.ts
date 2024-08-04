import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
axiosInstance.interceptors.request.use((request) => {
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log('Erro:', error);
    return Promise.reject(error);
  },
);
export { axiosInstance as axios };
