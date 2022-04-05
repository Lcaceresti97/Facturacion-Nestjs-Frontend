import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
 
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/views/customers',
    title: 'Customers',
    icon: 'bi bi-person-square',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/views/invoices',
    title: 'Invoices',
    icon: 'bi bi-card-list',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/views/invoices-details',
    title: 'Invoices Details',
    icon: 'bi bi-hdd-stack',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/views/products',
    title: 'Product',
    icon: 'bi bi-bag-check-fill',
    class: '',
    extralink: false,
    submenu: []
  }

];
