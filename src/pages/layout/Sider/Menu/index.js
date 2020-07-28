import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
// import menuList from '../../../../config/menuConfig';

class Meun extends Component {
  state = {
    collapsed: false,
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ width: 200 }}>
        <Menu defaultSelectedKeys={['dashboard']} mode="inline" theme="dark">
          <Menu.Item key="dashboard">
            <Link to="/dashboard">
              <span>首页</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="documents">
            <Link to="/documents">
              <span>文档</span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
    // return menuList.map((item) => {
    //   return (
    //     <Link to={item.path}>
    //       <span>{item.title}</span>
    //     </Link>
    //   );
    // });
  }
}

export default Meun;
