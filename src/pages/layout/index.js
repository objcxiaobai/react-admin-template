import React from 'react';
import { Layout } from 'antd';
import Content from './Content';
import Sider from './Sider';
import LayoutHeader from './Header';

function Main() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider></Sider>
      <Layout>
        <LayoutHeader></LayoutHeader>
        <Content></Content>
      </Layout>
    </Layout>
  );
}

export default Main;
