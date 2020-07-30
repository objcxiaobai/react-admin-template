const menuList = [
  {
    title: '首页',
    path: '/dashboard',
    icon: 'HomeOutlined',
    roles: ['admin', 'editor', 'guest'],
  },
  {
    title: '文档',
    icon: 'FileSearchOutlined',
    path: '/documents',
  },
  {
    title: '权限测试',
    path: '/permission',
    icon: 'LockOutlined',
    children: [
      {
        title: '测试一',
        path: '/permission/explanation',
      },
    ],
  },
];

export default menuList;
