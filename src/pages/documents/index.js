import React, { Component } from 'react';
import { Table, Space, Button } from 'antd';
import EditorModal from '@/components/EditorModal';
import { getList } from '@/api/documents';
import './index.css';
class Documents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      visible: false,
    };
  }

  _renderColumns = () => {
    return [
      {
        title: '作者',
        dataIndex: 'author',
      },
      {
        title: '标题',
        dataIndex: 'title',
      },
      {
        title: '操作',
        key: 'action',
        render: (_, record, index) => {
          let item = record;
          let idx = index;
          return (
            <Space size="middle">
              <Button
                type="link"
                onClick={() => this._handClickEdit(item, idx)}
              >
                编辑
              </Button>
              <Button
                type="link"
                onClick={() => this._handClickDelete(item, idx)}
              >
                删除
              </Button>
            </Space>
          );
        },
      },
    ];
  };

  _handClickDelete = (record, index) => {
    const tempList = [...this.state.list];
    tempList.splice(index, 1);
    this.setState({
      list: tempList,
    });
    console.log('删除', record, index);
  };

  _handClickEdit = (record, index) => {
    this.setState((state) => ({
      visible: !state.visible,
    }));
    console.log('编辑', record, index);
  };

  _editorCallBack = (value) => {
    this.setState({
      visible: value,
    });
  };

  render() {
    const _columns = this._renderColumns();

    return (
      <>
        <div className="d-container">
          <Table
            columns={_columns}
            rowKey={(record) => record.url}
            dataSource={this.state.list}
          ></Table>

          <EditorModal
            visible={this.state.visible}
            editorCallBack={this._editorCallBack}
          />
        </div>
      </>
    );
  }

  componentDidMount() {
    getList()
      .then((data) => {
        console.log('请求成功', data.articles);
        this.setState({
          list: data.articles,
        });
      })
      .catch((err) => {
        console.log('请求失败', err);
      });
  }
}

export default Documents;
