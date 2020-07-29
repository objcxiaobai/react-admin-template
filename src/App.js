import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import Login from './pages/login';
import Layout from './pages/layout';

function App() {
  return (
    <Router>
      <Switch>
        <Login></Login>
        {/* <Layout></Layout> */}
      </Switch>
    </Router>
  );
}

export default App;
