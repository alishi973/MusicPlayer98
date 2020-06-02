import pages from './pages';
import React from 'react';
export default [
  {
    component: () => (
      <div>
        <div>404</div>
      </div>
    ),
    default: true,
  },
  {
    component: pages.Home,
    path: '/',
  },
  {
    component: pages.Song,
    path: '/song/:songName',
  },
];
