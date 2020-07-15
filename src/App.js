import React from 'react';
import ROUTES, { RenderRoutes } from './routes';
import { Layout } from './components/layout';

function App() {
  return (
    <Layout routes={ROUTES}>
      <RenderRoutes routes={ROUTES} />
    </Layout>
  );
}

export default App;
