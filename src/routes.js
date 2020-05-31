import pages from './pages';
export default [
  {
    component: pages.Home,
    path: '/',
  },
  {
    component: pages.Song,
    path: '/song/:songName',
  },
];
