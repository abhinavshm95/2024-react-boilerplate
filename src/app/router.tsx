import { useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { paths } from '@/config/paths';
import { ProtectedRoute } from '@/lib/auth';

import { AppRoot, AppRootErrorBoundary } from './routes/app/root';

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.home.path,
      lazy: async () => {
        const { LandingRoute } = await import('./routes/landing');
        return { Component: LandingRoute };
      },
    },
    {
      path: paths.auth.register.path,
      lazy: async () => {
        const { RegisterRoute } = await import('./routes/auth/register');
        return { Component: RegisterRoute };
      },
    },
    {
      path: paths.auth.login.path,
      lazy: async () => {
        const { LoginRoute } = await import('./routes/auth/login');
        return { Component: LoginRoute };
      },
    },
    {
      path: paths.app.root.path,
      element: (
        <ProtectedRoute>
          <AppRoot />
        </ProtectedRoute>
      ),
      ErrorBoundary: AppRootErrorBoundary,
      children: [
        // {
        //   path: paths.app.users.path,
        //   lazy: async () => {
        //     const { UsersRoute, usersLoader } = await import(
        //       './routes/app/users'
        //     );
        //     return {
        //       Component: UsersRoute,
        //       loader: usersLoader(queryClient),
        //     };
        //   },
        //   ErrorBoundary: AppRootErrorBoundary,
        // },
        // {
        //   path: paths.app.profile.path,
        //   lazy: async () => {
        //     const { ProfileRoute } = await import('./routes/app/profile');
        //     return {
        //       Component: ProfileRoute,
        //     };
        //   },
        //   ErrorBoundary: AppRootErrorBoundary,
        // },
        {
          path: paths.app.dashboard.path,
          lazy: async () => {
            const { DashboardRoute } = await import('./routes/app/dashboard');
            return {
              Component: DashboardRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.schedule.path,
          lazy: async () => {
            const { ScheduleRoute } = await import('./routes/app/schedule');
            return {
              Component: ScheduleRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.client.path,
          lazy: async () => {
            const { ClientRoute } = await import('./routes/app/client');
            return {
              Component: ClientRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.location.path,
          lazy: async () => {
            const { LocationRoute } = await import('./routes/app/location');
            return {
              Component: LocationRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.quote.path,
          lazy: async () => {
            const { QuoteRoute } = await import('./routes/app/quote');
            return {
              Component: QuoteRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.job.path,
          lazy: async () => {
            const { JobRoute } = await import('./routes/app/job');
            return {
              Component: JobRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.invoice.path,
          lazy: async () => {
            const { InvoiceRoute } = await import('./routes/app/invoice');
            return {
              Component: InvoiceRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.team.path,
          lazy: async () => {
            const { TeamRoute } = await import('./routes/app/team');
            return {
              Component: TeamRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.timesheet.path,
          lazy: async () => {
            const { TimeSheetRoute } = await import('./routes/app/time-sheet');
            return {
              Component: TimeSheetRoute,
            };
          },
        },
        {
          path: paths.app.setting.path,
          lazy: async () => {
            const { SettingRoute } = await import('./routes/app/setting');
            return {
              Component: SettingRoute,
            };
          },
        },
      ],
    },
    {
      path: '*',
      lazy: async () => {
        const { NotFoundRoute } = await import('./routes/not-found');
        return {
          Component: NotFoundRoute,
        };
      },
      ErrorBoundary: AppRootErrorBoundary,
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(), [queryClient]);

  return <RouterProvider router={router} />;
};
