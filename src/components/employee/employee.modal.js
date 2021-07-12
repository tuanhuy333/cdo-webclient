import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Input, InputNumber, Select } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const EmployeeModal = (props) => {
  const { openModal, offModal, onSuccess } = props;
  const { t, i18n } = useTranslation();
  const { Title } = Typography;
  const [form] = Form.useForm();

  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      offModal();
      setConfirmLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    offModal();
  };

  return (
    <>
      <Modal
        title={t("Create Employee")}
        visible={openModal}
        onOk={form.submit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          {...layout}
          form={form}
          name="nest-messages"
          onFinish={onSuccess}
          validateMessages={validateMessages}
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ type: "email" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="gender" label="	Gender">
            <Select placeholder="Select province">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EmployeeModal;
