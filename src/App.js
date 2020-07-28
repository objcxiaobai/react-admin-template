import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';

import Layout from './pages/layout';

function App() {
  return (
    <Router>
      <Switch>
        <Layout></Layout>
      </Switch>
    </Router>
  );
}

export default App;
