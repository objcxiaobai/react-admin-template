import Loadable from 'react-loadable';
import Loading from '@/components/Loading';
const Dashboard = Loadable({
  loader: () => import(/*webpackChunkName:'Dashboard'*/ '@/pages/dashboard'),
  loading: Loading,
});

const Documents = Loadable({
  loader: () => import(/*webpackChunkName:'Documents'*/ '@/pages/documents'),
  loading: Loading,
});

const Permission = Loadable({
  loader: () => import(/*webpackChunkName:'Permission'*/ '@/pages/permission'),
  loading: Loading,
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
