
import pages from './pages';
export default [
  {
    component: pages.Home,
    path: '/',
  },
  {
    component: pages.auth.spotify.SpotifyCallback,
    path: '/auth/spotify/callback',
  },
];
