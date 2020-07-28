const menuList = [
  {
    title: '首页',
    path: '/dashboard',
    icon: 'home',
    roles: ['admin', 'editor', 'guest'],
  },
  {
    title: '文档',
    path: '/documents',
  },
  {
    title: '权限测试',
    path: '/permission',
    icon: 'lock',
    children: [
      {
        title: '测试一',
        path: '/permission/explanation',
      },
    ],
  },
];

export default menuList;
