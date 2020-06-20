import * as React from 'react';

const Song = React.lazy(() => import('./Song'));
const Home = React.lazy(() => import('./Home'));
const NotFound = React.lazy(() => import('./NotFound'));

export default { Home, Song, NotFound };
