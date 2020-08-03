import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Dropdown, Menu, Avatar } from 'antd';
import duoduo from '../../../assets/images/duoduo.jpg';
import { CaretDownOutlined } from '@ant-design/icons';
import Hamburger from '../../../components/Hamburger';
import { connect } from 'react-redux';
import { actionCreators } from '../../../pages/login/store';
import './index.css';
const { Header } = Layout;

class LayoutHeader extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const menu = (
      <Menu onClick={this.handleClick}>
        <Menu.Item key="">
          <Link to="/dashboard">首页</Link>
        </Menu.Item>
        <Menu.Item key="outLogin">注销</Menu.Item>
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

  handleClick(item) {
    let key = item.key;
    switch (key) {
      case 'outLogin':
        this.props.loginOut();
        break;
      default:
        console.log('这是默认');
        break;
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginOut() {
    dispatch(actionCreators.loginOut());
  },
});

export default connect(null, mapDispatchToProps)(LayoutHeader);
