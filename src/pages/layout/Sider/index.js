import React from 'react';
import { Layout } from 'antd';
import Menu from './Menu';
import Logo from './Logo';
import { connect } from 'react-redux';
const Side = Layout.Sider;
function Sider(props) {
  const { status } = props;
  /**
   * collapsible 当前收起状态
   * collapsed 是否可收起
   * trigger 自定义 trigger，设置为 null 时隐藏 trigger
   */
  return (
    <Side
      collapsible
      collapsed={status}
      trigger={null}
      style={{
        zIndex: '10',
      }}
    >
      <Logo />
      <Menu></Menu>
    </Side>
  );
}

const mapStateToProps = (state) => ({
  status: state.layout.status,
});

export default connect(mapStateToProps, null)(Sider);
