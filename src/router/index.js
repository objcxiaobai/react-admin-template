import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../pages/layout';
import Login from '../pages/login';
import { connect } from 'react-redux';

class Router extends Component {
  render() {
    const { token } = this.props;
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route
            path="/"
            render={() => {
              if (!token) {
                return <Redirect to="/login"></Redirect>;
              } else {
                return <Layout></Layout>;
              }
            }}
          ></Route>
        </Switch>
      </HashRouter>
    );
  }
}
const mapState = (state) => ({
  token: state.login.token,
});

export default connect(mapState, null)(Router);
