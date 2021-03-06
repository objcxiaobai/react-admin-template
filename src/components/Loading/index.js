import React, { Component } from 'react';
import { Spin } from 'antd';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({ showSpinner: false }); // NProgress Configuration

class Loading extends Component {
  componentDidMount() {
    NProgress.start();
  }
  componentDidUpdate() {
    NProgress.done();
  }
  componentWillUnmount() {
    NProgress.done();
  }

  render() {
    return (
      <div className="app-container">
        <Spin></Spin>
      </div>
    );
  }
}

export default Loading;
