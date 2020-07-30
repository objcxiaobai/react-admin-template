import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../../dashboard';
import Documents from '../../documents';
import Permission from '../../permission';
class Content extends Component {
  render() {
    return (
      <Switch>
        <Route component={Dashboard} path="/dashboard" key="/dashboard"></Route>
        <Route component={Documents} path="/documents" key="/documents"></Route>
        <Route
          component={Permission}
          path="/permission"
          key="/permission"
        ></Route>
      </Switch>
    );
  }
}
export default Content;
