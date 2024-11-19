import { useNavigate } from 'react-router-dom';

import logo from '@/assets/logo.svg';
import { Head } from '@/components/seo';
import { Button } from '@/components/ui/button';
import { paths } from '@/config/paths';
import { useUser } from '@/lib/auth';
import { useEffect } from 'react';

export const LandingRoute = () => {
  const navigate = useNavigate();
  const user = useUser();

  const handleStart = () => {
    if (user.data?.id) {
      navigate(paths.app.dashboard.getHref());
    } else {
      navigate(paths.auth.login.getHref());
    }
  };

  useEffect(() => {
    if (user.data?.id) {
      navigate(paths.app.dashboard.getHref());
    }
  }, [user.data, navigate]);

  return (
    <>
      <Head description="Welcome to CompantName" title="CompantName" />
      <div className="flex h-screen items-center bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Welcome to CompantName</span>
          </h2>
          <img src={logo} alt="react" width="250" className="mx-auto my-8" />
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Button onClick={handleStart}>Login</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
