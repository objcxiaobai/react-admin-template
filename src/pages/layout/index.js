import React from 'react';
import { Layout } from 'antd';
import Content from './Content';
import Sider from './Sider';

function Main() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider></Sider>
      <Layout style={{ marginLeft: 200 }}>
        <header>我是头部</header>
        <Content></Content>
      </Layout>
    </Layout>
  );
}

export default Main;
