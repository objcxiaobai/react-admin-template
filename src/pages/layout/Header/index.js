import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Dropdown, Menu, Avatar } from 'antd';
import './index.css';
import duoduo from '../../../assets/images/duoduo.jpg';
import { CaretDownOutlined } from '@ant-design/icons';
import Hamburger from '../../../components/Hamburger';
const { Header } = Layout;

class LayoutHeader extends Component {
  render() {
    const menu = (
      <Menu onClick={this.handleClick}>
        <Menu.Item key="">
          <Link to="/dashboard">首页</Link>
        </Menu.Item>
        <Menu.Item key="logo">注销</Menu.Item>
      </Menu>
    );

    return (
      <>
        <Header>
          <Hamburger />
          <div className="right-menu">
            <div className="dropdown-wrap">
              <Dropdown overlay={menu}>
                <div>
                  <Avatar shape="square" size="medium" src={duoduo}></Avatar>
                  <CaretDownOutlined />
                </div>
              </Dropdown>
            </div>
          </div>
        </Header>
      </>
    );
  }

  handleClick(key) {
    console.log(key);
  }
}

export default LayoutHeader;
