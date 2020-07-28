import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Link to="/home">go Home</Link>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
