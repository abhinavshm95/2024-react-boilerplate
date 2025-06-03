import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Head } from '@/components/seo';
import { paths } from '@/config/paths';
import { useUser } from '@/lib/auth';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
  type: 'login' | 'register';
};

export const AuthLayout = ({ children, title, type }: LayoutProps) => {
  const user = useUser();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  const navigate = useNavigate();

  useEffect(() => {
    console.log('user.data', user);

    if (user.data?.id) {
      console.log('redirecting to dashboard');

      navigate(redirectTo ? redirectTo : paths.app.dashboard.getHref(), {
        replace: true,
      });
    }
  }, [user.data, navigate, redirectTo]);

  return (
    <>
      <Head title={title} />
      {type === 'login' && (
        <div className="flex min-h-screen flex-col justify-center bg-gray-50">
          <div className="sm:mx-auto sm:w-full"></div>

          <div className="sm:mx-auto sm:w-full">
            <div className="bg-white">{children}</div>
          </div>
        </div>
      )}
      {type === 'register' && (
        <div className="flex min-h-screen items-center justify-center bg-white">
          <div className="flex w-full max-w-md flex-col">
            <div className="w-full rounded-lg bg-white p-6 shadow-xl">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
