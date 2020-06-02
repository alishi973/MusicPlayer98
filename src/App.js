import React from 'react';
import { Router } from '@reach/router';
import Axios from 'axios';
import Context from './Context';
import Layout from './components/Layout';
import Routes from './routes';

Axios.defaults.baseURL = process.env.BASE_CORS;

export default function App() {
  return (
    <Context>
      <Layout>
        <Router>
          {Routes.map((EachRoute, i) => (
            <EachRoute.component key={i} {...EachRoute} />
          ))}
        </Router>
      </Layout>
    </Context>
  );
}
