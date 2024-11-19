import Axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { env } from '@/config/env';

// Interceptor to add common headers and credentials
function authRequestInterceptor(
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig {
  if (config.headers) {
    config.headers.Accept = 'application/json';
  }

  config.withCredentials = true;
  return config;
}

// Ensure the API URL is defined
if (!env.API_URL) {
  throw new Error('API_URL is not defined in the environment variables');
}

// Create an Axios instance with the base URL
export const api = Axios.create({
  baseURL: env.API_URL,
});

// Add request interceptor
api.interceptors.request.use(authRequestInterceptor);

// Add response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config;
    // Handle unauthorized errors
    if (error.response?.status === 401) {
      try {
        const response = await api.post('/auth/refresh-tokens');
        if (!response) {
          throw new Error('Invalid request');
        }
        if (originalRequest) {
          return api(originalRequest);
        } else {
          throw new Error('Original request is undefined');
        }
      } catch (refreshError) {
        console.log('error', refreshError);
        // Redirect to the login page
        // const searchParams = new URLSearchParams();
        // const redirectTo =
        //   searchParams.get('redirectTo') || window.location.pathname;
        // window.location.href = `/login?redirectTo=${redirectTo}`;
        return Promise.reject(refreshError);
      }
    }
  },
);
