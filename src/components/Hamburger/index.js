import React, { Component } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { actionCreators } from '../../pages/layout/store';
import { connect } from 'react-redux';
import './index.css';

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
  }
  render() {
    const { status } = this.props;
    const chooseIcon = status ? (
      <MenuFoldOutlined onClick={this.handleChangeStatus} />
    ) : (
      <MenuUnfoldOutlined onClick={this.handleChangeStatus} />
    );
    return <div className="hamburger-container">{chooseIcon}</div>;
  }

  handleChangeStatus() {
    let { status } = this.props;
    this.props.setSideBar(status);
  }
}

const mapState = (state) => ({
  status: state.layout.status,
});
const mapDispatch = (dispatch) => ({
  setSideBar(status) {
    dispatch(actionCreators.setSideBar(status));
  },
});

export default connect(mapState, mapDispatch)(Hamburger);
