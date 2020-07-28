import React from 'react';
import { Layout } from 'antd';
import Menu from './Menu';

const Side = Layout.Sider;
function Sider() {
  /**
   * collapsible 当前收起状态
   * collapsed 是否可收起
   * trigger 自定义 trigger，设置为 null 时隐藏 trigger
   */
  return (
    <Side
      collapsible={false}
      collapsed={false}
      trigger={null}
      style={{
        zIndex: '10',
        height: '100vh',
        position: 'fixed',
        left: 0,
        overflow: 'auto',
      }}
    >
      <Menu></Menu>
    </Side>
  );
}

export default Sider;
