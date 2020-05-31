import React from 'react';
import Layout from './components/Layout';
import { Router } from '@reach/router';
import Axios from 'axios';
import Routes from './routes';

Axios.defaults.baseURL = process.env.BASE_CORS;

export default function App() {
  return (
    <Layout>
      <Router>
        {Routes.map((EachRoute, i) => (
          <EachRoute.component key={i} path={EachRoute.path} />
        ))}
      </Router>
    </Layout>
  );
}
