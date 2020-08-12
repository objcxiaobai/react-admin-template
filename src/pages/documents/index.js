import React, { Component } from 'react';
import { Table, Space, Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import EditorModal from '@/components/EditorModal';
import { getList } from '@/api/documents';
import './index.css';

const { confirm } = Modal;

class Documents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      visible: false,
      editContent: {
        author: '',
        content: '',
      },
      e_index: 0,
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
    this._showDeleteConfirm(record, index);
  };

  _showDeleteConfirm = (record, index) => {
    const self = this;
    confirm({
      title: '警告!',
      icon: <ExclamationCircleOutlined />,
      content: '是否删除删除该条信息',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        const tempList = [...self.state.list];
        tempList.splice(index, 1);
        self.setState({
          list: tempList,
        });
        console.log('删除', record, index);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  _handClickEdit = (record, index) => {
    const { author, content } = record;
    const tempObj = {
      author,
      content,
    };
    this.setState((state) => ({
      visible: !state.visible,
      editContent: tempObj,
      e_index: index,
    }));
  };

  _editorCallBack = (value, item) => {
    const { e_index, list } = this.state;
    const obj = list[e_index];
    const tempObj = { ...obj, ...item };
    const tempList = [...list];
    tempList[e_index] = tempObj;
    this.setState({
      list: tempList,
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
            editContent={this.state.editContent}
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
