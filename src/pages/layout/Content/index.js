import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routeList from '../../../config/routeMap';
class Content extends Component {
  render() {
    return (
      <Switch>
        {routeList.map((item) => {
          return (
            <Route
              component={item.component}
              path={item.path}
              key={item.path}
            ></Route>
          );
        })}
      </Switch>
    );
  }
}
export default Content;
