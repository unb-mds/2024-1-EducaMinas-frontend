import axios from 'axios';
import { toast } from 'sonner';

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
    if ((error as any).message === 'Network Error') {
      toast.error('Erro de conexão: não foi possível completar a requisição.');
      return null;
    } else {
      return Promise.reject(error);
    }
  },
);
export { axiosInstance as axios };
