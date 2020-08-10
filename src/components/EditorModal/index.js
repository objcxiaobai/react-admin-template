import React, { Component } from 'react';
import { Modal } from 'antd';
class EditorModal extends Component {
  constructor(props) {
    super(props);
  }

  handlerSubmit = () => {
    console.log('成功');
    this.handleEditorCallBackSuper();
  };

  handlerCanCle = () => {
    this.handleEditorCallBackSuper();
  };

  handleEditorCallBackSuper = () => {
    let value = this.props.visible ? false : true;
    this.props.editorCallBack(value);
  };

  render() {
    const { visible } = this.props;
    return (
      <>
        <Modal
          title="编辑"
          visible={visible}
          onOk={this.handlerSubmit}
          onCancel={this.handlerCanCle}
        >
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </Modal>
      </>
    );
  }
}

export default EditorModal;
