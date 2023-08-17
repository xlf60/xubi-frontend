export default [
  { path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { name: 'sssss', path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: 'sssss', component: './Admin' },

    ],
  },
  {  name: '表单页面', path: '/list', component: './TableList' },
  {  name: '欢迎页面', path: '/', redirect: '/welcome' },
  {  path: '*', layout: false, component: './404' },
];
