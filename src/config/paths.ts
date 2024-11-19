export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },

  auth: {
    register: {
      path: '/auth/register',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    login: {
      path: '/auth/login',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
  },

  app: {
    root: {
      path: '/',
      getHref: () => '/',
    },
    dashboard: {
      path: 'dashboard',
      getHref: () => '/dashboard',
    },
    schedule: {
      path: 'schedule',
      getHref: () => '/schedule',
    },
    client: {
      path: 'client',
      getHref: () => '/client',
    },
    location: {
      path: 'location',
      getHref: () => '/location',
    },
    quote: {
      path: 'quote',
      getHref: () => '/quote',
    },
    job: {
      path: 'job',
      getHref: () => '/job',
    },
    invoice: {
      path: 'invoice',
      getHref: () => '/invoice',
    },
    team: {
      path: 'team',
      getHref: () => '/team',
    },
    timesheet: {
      path: 'timesheet',
      getHref: () => '/timesheet',
    },
    setting: {
      path: 'setting',
      getHref: () => '/setting',
    },
    profile: {
      path: 'profile',
      getHref: () => '/profile',
    },
  },
} as const;
