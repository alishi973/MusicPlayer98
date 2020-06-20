import pages from './pages';
export default [
  {
    component: pages.Home,
    path: '/',
    exact: true,
  },
  {
    component: pages.Song,
    path: '/song/:songName',
    exact: true,
  },
  {
    component: () => pages.NotFound,
  },
];
