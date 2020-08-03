import React from 'react';
import { Layout } from 'antd';
import Content from './Content';
import Sider from './Sider';
import LayoutHeader from './Header';
import TagsView from './TagsView';

function Main(props) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider></Sider>
      <Layout>
        <LayoutHeader></LayoutHeader>
        <TagsView />
        <Content></Content>
      </Layout>
    </Layout>
  );
}

export default Main;
