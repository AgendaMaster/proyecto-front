import React from 'react';
import { RenderRoutes } from './router/routes';
import { Layout } from './components/layout';

function App() {
  return (
    <Layout>
      <RenderRoutes />
    </Layout>
  );
}

export default App;
