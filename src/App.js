import React from 'react';
import Layout from './hoc/Layout/Layout';
import AppRoutes from './routes/app.routing';

function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;
