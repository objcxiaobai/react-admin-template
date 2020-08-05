import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import './index.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
  }
  render() {
    return (
      <div className="login-container">
        <Form
          className="content"
          onFinish={this.handleSubmit}
          onFinishFailed={this.handleError}
        >
          <Form.Item
            name="username"
            label="账号"
            rules={[
              {
                required: true,
                message: 'please input your username',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: 'please input your password',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-container-btn"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }

  handleSubmit(event) {
    console.log(event);
    const { username, password } = event;
    if (username === 'xb' && password === '123') {
      message.success('登录成功');
      this.props.setToken(username, 'admin');
      this.props.history.push('/dashboard');
    } else {
      message.error('账号密码错误');
    }
  }
  handleError(error) {
    console.log('失败', error);
  }
}

const mapState = (state) => ({
  token: state.login.token,
});

const mapDispatch = (dispatch) => ({
  setToken(token, role) {
    dispatch(actionCreators.setToken(token, role));
  },
});

export default connect(mapState, mapDispatch)(withRouter(Login));
