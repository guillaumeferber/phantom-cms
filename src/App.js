import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Notes from './containers/Notes/Notes';

function App() {
  return (
    <Layout>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/notes" component={Notes} />
        </Switch>
    </Layout>
  );
}

export default App;
