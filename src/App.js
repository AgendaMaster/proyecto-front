import React from 'react';
import ROUTES, { RenderRoutes } from './routes';

import MenuExample from './components/Menu.example';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'stretch' }}>
      <div style={{ flex: 0.3, backgroundColor: '#f2f2f2' }}>
        <MenuExample routes={ROUTES} />
      </div>
      <div>
        <RenderRoutes routes={ROUTES} />
      </div>
    </div>
  );
}

export default App;
