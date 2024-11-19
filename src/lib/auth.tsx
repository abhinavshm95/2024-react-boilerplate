import { configureAuth } from 'react-query-auth';
import { Navigate, useLocation } from 'react-router-dom';
import { z } from 'zod';

import { paths } from '@/config/paths';
import { TAuthMeResponse, TUser } from '@/types/user.type';

import { api } from './api-client';

// api call definitions for auth (types, schemas, requests):
// these are not part of features as this is a module shared across features

const nullUser: TUser = {
  createdAt: '',
  email: '',
  firstName: '',
  id: '',
  lastName: '',
  isEmailVerified: false,
  role: '',
  updatedAt: '',
  username: '',
};

const getUser = async (): Promise<TUser> => {
  try {
    const response = await api.get('/auth/me');
    return response.data;
  } catch (error) {
    return nullUser;
  }
};

const logout = (): Promise<void> => {
  return api.post('/auth/logout');
};

export const loginInputSchema = z.object({
  email: z.string().min(1, 'Required').email('Invalid email'),
  password: z.string().min(5, 'Required'),
});

export type LoginInput = z.infer<typeof loginInputSchema>;
const loginWithEmailAndPassword = async (data: LoginInput): Promise<TUser> => {
  const loginRes = await api.post('/auth/business/login', data);
  return loginRes.data;
};

export const registerInputSchema = z.object({
  email: z.string().min(1, 'Required'),
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
  businessName: z.string().min(1, 'Required'),
  businessAddress: z.string().min(1, 'Required'),
});

export type RegisterInput = z.infer<typeof registerInputSchema>;

const registerWithEmailAndPassword = async (
  data: RegisterInput,
): Promise<TUser> => {
  const registerRes: TAuthMeResponse = await api.post(
    '/auth/business/register',
    data,
  );
  return registerRes.data;
};

const authConfig = {
  userFn: getUser,
  loginFn: async (data: LoginInput) => {
    const response = await loginWithEmailAndPassword(data);
    if (!response?.id) {
      throw new Error('Invalid credentials');
    }
    return response;
  },
  registerFn: async (data: RegisterInput) => {
    const response = await registerWithEmailAndPassword(data);
    return response;
  },
  logoutFn: logout,
};

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } =
  configureAuth(authConfig);

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();
  const location = useLocation();

  if (!user.data?.id) {
    console.log({
      pathname: location.pathname,
      redirectTo: paths.auth.login.getHref(location.pathname),
    });
    return (
      <Navigate to={paths.auth.login.getHref(location.pathname)} replace />
    );
  }

  return children;
};
