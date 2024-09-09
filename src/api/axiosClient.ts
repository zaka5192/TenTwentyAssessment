import axios, {InternalAxiosRequestConfig} from 'axios';
import {showToast} from '../config/utils';

export const axiosClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 30000,
  timeoutErrorMessage: 'Request is timed out',
});

axiosClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    // Code for Headers to be set here
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  response => {
    if (response.data && response.data.message) {
      showToast('Success', response.data.message, 'success');
    }
    return response.data;
  },
  (error: any) => {
    // console.log('error in axios File: ', error);
    if (error.response.status === 406) {
      showToast(
        'Approval Pending',
        error.response.data?.message || 'Something went wrong',
        'success',
      );
    } else if (error.response.data?.message) {
      showToast(
        'Error',
        error.response.data?.message || 'Something went wrong',
        'error',
      );
    } else if (error.response.data?.error?.message) {
      showToast(
        'Error',
        error.response?.data?.error?.message || 'Something went wrong',
        'error',
      );
    }

    return Promise.reject(error);
  },
);
