import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import './index.css';
class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <Form className="content">
          <Form.Item label="账号">
            <Input />
          </Form.Item>
          <Form.Item label="密码">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="submit" className="login-container-btn">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Login;
