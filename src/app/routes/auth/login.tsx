import { useNavigate, useSearchParams } from 'react-router-dom';

import loginImg from '@/assets/grounded-bg-image.jpg';
import logo from '@/assets/logo.svg';
import { AuthLayout } from '@/components/layouts/auth-layout';
import { paths } from '@/config/paths';
import { LoginForm } from '@/features/auth/components/login-form';

export const LoginRoute = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  return (
    <AuthLayout title="Log in to your account" type="login">
      <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted text-white dark:border-r lg:flex">
          <img
            src={loginImg}
            alt="Login"
            className="h-screen w-full object-cover"
          />
          <div className="absolute inset-0 bg-white opacity-50"></div>
          <img
            src={logo}
            alt="Login"
            className="absolute inset-0 m-auto flex h-60 items-center justify-center"
          />
        </div>
        <div className="flex h-full items-center p-4 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Log in to your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Welcome back! Please enter your details.
              </p>
            </div>
            <LoginForm
              onSuccess={() => {
                navigate(
                  `${redirectTo ? `${redirectTo}` : paths.app.dashboard.getHref()}`,
                  {
                    replace: true,
                  },
                );
              }}
            />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
