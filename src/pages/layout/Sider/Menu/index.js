import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import menuList from '../../../../config/menuConfig';
import {
  HomeOutlined,
  FileSearchOutlined,
  LockOutlined,
} from '@ant-design/icons';

const Icons = {
  HomeOutlined: <HomeOutlined />,
  FileSearchOutlined: <FileSearchOutlined />,
  LockOutlined: <LockOutlined />,
};

const SubMenu = Menu.SubMenu;

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
          {menuList.map((item) => {
            const myIcon = Icons[item.icon];
            const isChildren = item.children ? true : false;
            if (isChildren) {
              return (
                <SubMenu key={item.path} icon={myIcon} title={item.title}>
                  <Menu.Item key={item.path}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </Menu.Item>
                </SubMenu>
              );
            } else {
              return (
                <Menu.Item key={item.path}>
                  <Link to={item.path}>
                    {myIcon}
                    <span>{item.title}</span>
                  </Link>
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </div>
    );
  }
}

export default Meun;
