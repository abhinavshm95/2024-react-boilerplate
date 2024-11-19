import { Icons } from '@/components/ui/icons';

export const rolesList = [
  'super_admin',
  'company_admin',
  'business_owner',
  'office_manager',
  'worker',
];
const allRoles: { [key: string]: string[] } = {
  super_admin: [],
  company_admin: [],
  business_owner: [],
  office_manager: [],
  worker: [],
};

const roleRights = new Map(Object.entries(allRoles));

export const roleRightsMap = roleRights;

export enum ROLES {
  SUPER_ADMIN = 'super_admin',
  COMPANY_ADMIN = 'company_admin',
  BUSINESS_OWNER = 'business_owner',
  OFFICE_MANAGER = 'office_manager',
  WORKER = 'worker',
}

export interface NavItem {
  title: string;
  url: string;
  disabled?: boolean;
  external?: boolean;
  shortcut?: [string, string];
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
  isActive?: boolean;
  items?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: 'dashboard',
    isActive: false,
    // TODO: ask #kiran about these shortcuts
    // shortcut: ['d', 'd'],
    items: [], // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Schedule',
    url: '/schedule',
    icon: 'calendar',
    // shortcut: ['e', 'e'],
    isActive: false,
    items: [], // No child items
  },
  {
    title: 'Clients',
    url: '/client',
    icon: 'add',
    // shortcut: ['p', 'p'],
    isActive: false,
    items: [], // No child items
  },
  {
    title: 'Locations',
    url: '/location',
    icon: 'location',
    isActive: false,
    items: [], // No child items
  },
  {
    title: 'Quotes',
    url: '/quote',
    icon: 'quote',
    isActive: false,
    items: [], // No child items
  },
  {
    title: 'Jobs',
    url: '/job',
    icon: 'job',
    isActive: false,
    items: [], // No child items
  },
  {
    title: 'Invoices',
    url: '/invoice',
    icon: 'billing',
    isActive: false,
    items: [], // No child items
  },
  {
    title: 'Team',
    url: '/team',
    icon: 'employee',
    isActive: false,
    items: [], // No child items
  },
  {
    title: 'Time Sheet',
    url: '/timesheet',
    icon: 'clock',
    isActive: false,
    items: [], // No child items
  },
  {
    title: 'Settings',
    url: '/setting',
    icon: 'settings',
    isActive: false,
    items: [], // No child items
  },
  // {
  //   title: 'Account',
  //   url: '#', // Placeholder as there is no direct link for the parent
  //   icon: 'billing',
  //   isActive: true,

  //   items: [
  //     {
  //       title: 'Profile',
  //       url: '/dashboard/profile',
  //       icon: 'arrowRight',
  //       shortcut: ['m', 'm'],
  //     },
  //     {
  //       title: 'Login',
  //       shortcut: ['l', 'l'],
  //       url: '/',
  //       icon: 'login',
  //     },
  //   ],
  // },
];
