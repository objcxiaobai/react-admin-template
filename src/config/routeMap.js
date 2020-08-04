import Loadable from 'react-loadable';
import { Spin } from 'antd';
const Dashboard = Loadable({
  loader: () => import(/*webpackChunkName:'Dashboard'*/ '@/pages/dashboard'),
  loading: Spin,
});

const Documents = Loadable({
  loader: () => import(/*webpackChunkName:'Documents'*/ '@/pages/documents'),
  loading: Spin,
});

const Permission = Loadable({
  loader: () => import(/*webpackChunkName:'Permission'*/ '@/pages/permission'),
  loading: Spin,
});

export default [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/documents',
    component: Documents,
  },
  {
    path: '/permission',
    component: Permission,
  },
];
