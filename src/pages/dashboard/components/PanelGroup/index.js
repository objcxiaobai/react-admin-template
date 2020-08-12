import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.css';
import {
  UserOutlined,
  MessageOutlined,
  MoneyCollectOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

const iconMaps = {
  UserOutlined: (
    <UserOutlined style={{ fontSize: 55, color: '#40c9c6' }}></UserOutlined>
  ),
  MessageOutlined: (
    <MessageOutlined
      style={{ fontSize: 55, color: '#36a3f7' }}
    ></MessageOutlined>
  ),
  MoneyCollectOutlined: (
    <MoneyCollectOutlined
      style={{ fontSize: 55, color: '#f4516c' }}
    ></MoneyCollectOutlined>
  ),
  ShoppingCartOutlined: (
    <ShoppingCartOutlined
      style={{ fontSize: 55, color: '#f6ab40' }}
    ></ShoppingCartOutlined>
  ),
};

const chartList = [
  {
    type: 'New Visits',
    icon: 'UserOutlined',
    num: 102400,
  },
  {
    type: 'Messages',
    icon: 'MessageOutlined',
    num: 81212,
  },
  {
    type: 'Purchases',
    icon: 'MoneyCollectOutlined',
    num: 9280,
  },
  {
    type: 'Shoppings',
    icon: 'ShoppingCartOutlined',
    num: 13600,
  },
];

class PanelGroup extends Component {
  render() {
    const icons = iconMaps;
    return (
      <div className="panel-group-container">
        <Row gutter={40} className="panel-group">
          {chartList.map((chart, i) => (
            <Col
              key={chart.type}
              lg={6}
              sm={12}
              xs={12}
              className="card-panel-col"
            >
              <div className="card-panel">
                <div className="card-panel-icon-wrapper">
                  {icons[chart.icon]}
                </div>
                <div className="card-panel-description">
                  <p className="card-panel-text">{chart.type}</p>
                  <p>{chart.num}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default PanelGroup;
