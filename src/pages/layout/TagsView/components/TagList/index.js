import React, { Component } from 'react';
import { Tag } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from '../../../store';
class TagList extends Component {
  render() {
    const { tagList, history } = this.props;
    const currentPath = history.location.pathname;
    return (
      <ul className="tags-wrap">
        {tagList.map((item) => (
          <li key={item.path}>
            <Tag
              closable={item.path !== '/dashboard'}
              color={currentPath === item.path ? 'geekblue' : 'gold'}
              onClose={this.handleClose.bind(this, item)}
            >
              {item.title}
            </Tag>
          </li>
        ))}
      </ul>
    );
  }
  handleClose(tag) {
    const { history, deleteTag, tagList } = this.props;
    const path = tag.path;
    const currentPath = history.location.pathname;
    const length = tagList.length;
    // 如果关闭的是当前页，跳转到最后一个tag
    if (path === currentPath) {
      history.push(tagList[length - 1].path);
    }
    // 如果关闭的是最后的tag ,且当前显示的也是最后的tag对应的页面，才做路由跳转
    if (
      path === tagList[length - 1].path &&
      currentPath === tagList[length - 1].path
    ) {
      // 因为cutTagList在最后执行，所以跳转到上一个tags的对应的路由，应该-2
      if (length - 2 > 0) {
        history.push(tagList[length - 2].path);
      } else if (length === 2) {
        history.push(tagList[0].path);
      }
    }

    // 先跳转路由，再修改state树的tagList
    deleteTag(tag);
  }
}

const mapStateToProp = (state) => ({
  tagList: state.layout.tagList,
});

const mapDispatchToProp = (dispatch) => ({
  deleteTag(tag) {
    dispatch(actionCreators.deleteTag(tag));
  },
});

export default withRouter(connect(mapStateToProp, mapDispatchToProp)(TagList));
