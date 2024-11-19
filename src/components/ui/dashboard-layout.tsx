import { useEffect, useState } from 'react';

import logo from '@/assets/logo.svg';
import { paths } from '@/config/paths';

import { AppSidebar } from '@/components/layouts/app-sidebar';
import { useNavigation } from 'react-router-dom';
import Header from '../layouts/header';
import { Link } from './link';
import { SidebarInset, SidebarProvider } from './sidebar';

// type SideNavigationItem = {
//   name: string;
//   to: string;
//   icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
// };

const Logo = () => {
  return (
    <Link className="flex items-center text-white" to={paths.home.getHref()}>
      <img className="h-8 w-auto" src={logo} alt="Workflow" />
      <span className="text-sm font-semibold text-white">CompantName</span>
    </Link>
  );
};

const Progress = () => {
  const { state, location } = useNavigation();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
  }, [location?.pathname]);

  useEffect(() => {
    if (state === 'loading') {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            clearInterval(timer);
            return 100;
          }
          const newProgress = oldProgress + 10;
          return newProgress > 100 ? 100 : newProgress;
        });
      }, 300);

      return () => {
        clearInterval(timer);
      };
    }
  }, [state]);

  if (state !== 'loading') {
    return null;
  }

  return (
    <div
      className="fixed left-0 top-0 h-1.5 bg-primary transition-all duration-200 ease-in-out z-50"
      style={{ width: `${progress}%` }}
    ></div>
  );
};

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  // const { checkAccess } = useAuthorization();
  // const navigation = [
  //   { name: 'Dashboard', to: paths.app.dashboard.getHref(), icon: Home },
  //   // { name: 'Discussions', to: paths.app.discussions.getHref(), icon: Folder },
  //   checkAccess({ allowedRoles: [ROLES.SUPER_ADMIN] }) && {
  //     name: 'Users',
  //     to: paths.app.users.getHref(),
  //     icon: Users,
  //   },
  // ].filter(Boolean) as SideNavigationItem[];

  return (
    <>
      <SidebarProvider defaultOpen={true}>
        <div className="flex h-screen w-full overflow-hidden">
          <AppSidebar />
          <SidebarInset>
            <Header />
            <Progress />
            <main className="flex-1 overflow-hidden px-6 py-4">{children}</main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
}
