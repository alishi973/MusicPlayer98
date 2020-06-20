import * as React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import Context from './Context';
import Layout from './components/Layout';
import Routes from './routes';

Axios.defaults.baseURL = process.env.BASE_CORS;

const Loading = () => <div>Loading...</div>;
export default function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Context>
        <Layout>
          <Router>
            <Switch>
              {Routes.map((EachRoute, i) => (
                <Route key={i} {...EachRoute} component={EachRoute.component} />
              ))}
            </Switch>
          </Router>
        </Layout>
      </Context>
    </React.Suspense>
  );
}
