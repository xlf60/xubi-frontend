export default [
  { path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/', redirect: '/add_chart' },
  { path: '/add_chart', name: '智能分析', icon: 'barChart', component: './AddChart' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { name: 'sssss', path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: 'sssss', component: './Admin' },

    ],
  },
  {  path: '*', layout: false, component: './404' },
];
