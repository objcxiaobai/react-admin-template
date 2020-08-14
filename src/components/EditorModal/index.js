import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';
class EditorModal extends Component {
  formRef = React.createRef();

  handlerSubmit = () => {
    this.formRef.current
      .validateFields()
      .then((item) => {
        console.log(item);
        this.handleEditorCallBackSuper(item);
      })
      .catch((err) => {
        console.log('错误', err);
      });
  };

  handlerCanCle = () => {
    this.handleEditorCallBackSuper();
  };

  handleEditorCallBackSuper = (item) => {
    let value = this.props.visible ? false : true;
    this.props.editorCallBack(value, item);
  };

  render() {
    const { visible, editContent } = this.props;
    const { author, content } = editContent;
    return (
      <>
        <Modal
          title="编辑"
          visible={visible}
          onOk={this.handlerSubmit}
          onCancel={this.handlerCanCle}
        >
          <Form ref={this.formRef} name="form_in_modal">
            <Form.Item
              label="作者"
              rules={[
                {
                  required: true,
                },
              ]}
              name="author"
              initialValue={author}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="内容"
              rules={[
                {
                  required: true,
                },
              ]}
              name="content"
              initialValue={content}
            >
              <Input.TextArea />
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}

export default EditorModal;
