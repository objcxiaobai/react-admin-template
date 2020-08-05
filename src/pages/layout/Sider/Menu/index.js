import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
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
  constructor(props) {
    super(props);
    this.state = {
      openKey: [],
      menuTreeNode: [],
    };
  }

  //判断权限
  filterMenuItem = (item) => {
    //获取权限数组
    const { roles } = item;
    //获取当前权限
    const { role } = this.props;

    if (role === 'admin' || (roles && roles.includes(role))) {
      return true;
    } else if (item.children) {
      // 如果当前用户有此item的某个子item的权限
      // ！！转换 布尔形式
      return !!item.children.find((child) => roles.includes(child.role));
    }

    return false;
  };

  //菜单渲染
  getMenuNodes = (menuList) => {
    // 得到当前请求的路由路径
    const path = this.props.location.pathname;

    return menuList.reduce((pre, item) => {
      const myIcon = Icons[item.icon];
      //进行当前权限判断和筛选
      if (this.filterMenuItem(item)) {
        //有木有二级菜单
        if (!item.children) {
          pre.push(
            <Menu.Item key={item.path}>
              <Link to={item.path}>
                {myIcon}
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          );
        } else {
          const subItem = item.children.find((sItem) => {
            /**
             * sItem的路径去匹配path是否一致
             *  是：返回0
             *  不是： 返回 -1
             * 最后判断是否布尔值形式
             */
            return path.indexOf(sItem.path) === 0;
          });

          if (subItem) {
            this.setState((state) => ({
              openKey: [...state.openKey, item.path],
            }));
          }

          pre.push(
            <SubMenu key={item.path} icon={myIcon} title={item.title}>
              {this.getMenuNodes(item.children)}
            </SubMenu>
          );
        }
      }

      return pre;
    }, []);
  };

  handleMenuSelect = ({ key = '/dashboard' }) => {
    //dfs 算法
    let menuItem = getMenuItemInMenuListByProperty(menuList, 'path', key);
    this.props.addTag(menuItem);
  };

  componentDidMount() {
    const menuTreeNode = this.getMenuNodes(menuList);
    this.setState({
      menuTreeNode,
    });
    //默认选中第一个
    this.handleMenuSelect(this.state.openKey);
  }

  render() {
    const { openKey, menuTreeNode } = this.state;
    const path = this.props.location.pathname;

    return (
      <div style={{ width: 200 }}>
        {menuTreeNode.map((item) => (
          <Menu
            key={item.key}
            defaultSelectedKeys={openKey}
            onSelect={this.handleMenuSelect}
            selectedKeys={[path]}
            mode="inline"
            theme="dark"
          >
            {item}
          </Menu>
        ))}
      </div>
    );
  }
}

const mapToDispatchProp = (dispatch) => ({
  addTag(tag) {
    dispatch(actionCreators.addTag(tag));
  },
});

const mapToStateProp = (state) => ({
  role: state.login.role,
});

export default connect(mapToStateProp, mapToDispatchProp)(withRouter(Meun));
