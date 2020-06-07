import React, { Suspense, lazy } from 'react';
// import { Router } from '@reach/router';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import Context from './Context';
import Layout from './components/Layout';
import Routes from './routes';
const Home = lazy(() => import('./pages/Home'));
const Song = lazy(() => import('./pages/Song'));

Axios.defaults.baseURL = process.env.BASE_CORS;

const Loading = () => <div>Loading...</div>;
export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Context>
        <Layout>
          <Router>
            <Switch>
              {/* {Routes.map((EachRoute, i) => (
              <EachRoute.component key={i} {...EachRoute} />
            ))} */}
              <Route path='/' component={Home} exact={true} />
              <Route path='/song/:songName' component={Song} />
            </Switch>
          </Router>
        </Layout>
      </Context>
    </Suspense>
  );
}
