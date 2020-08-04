import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import menuList from '../../../../config/menuConfig';
import { connect } from 'react-redux';
import {
  HomeOutlined,
  FileSearchOutlined,
  LockOutlined,
} from '@ant-design/icons';
import { actionCreators } from '../../store';
import { getMenuItemInMenuListByProperty } from '../../../../utils/utils';

const Icons = {
  HomeOutlined: <HomeOutlined />,
  FileSearchOutlined: <FileSearchOutlined />,
  LockOutlined: <LockOutlined />,
};

const SubMenu = Menu.SubMenu;

class Meun extends Component {
  state = {
    openKey: [],
  };

  handleMenuSelect = ({ key = '/dashboard' }) => {
    let menuItem = getMenuItemInMenuListByProperty(menuList, 'path', key);
    if (!this.state.openKey.includes(key)) {
      this.state.openKey.push(key);
    }
    this.props.addTag(menuItem);
  };

  componentDidMount() {
    this.handleMenuSelect({ key: '/dashboard' });
  }

  render() {
    const openKey = this.state.openKey;
    return (
      <div style={{ width: 200 }}>
        <Menu
          defaultSelectedKeys={openKey}
          onSelect={this.handleMenuSelect}
          mode="inline"
          theme="dark"
        >
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

const mapToDispatchProp = (dispatch) => ({
  addTag(tag) {
    dispatch(actionCreators.addTag(tag));
  },
});

export default connect(null, mapToDispatchProp)(Meun);
