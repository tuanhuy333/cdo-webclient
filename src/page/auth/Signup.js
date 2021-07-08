import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  Card,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import "../../assets/signup.css";

const { Option } = Select;

const Signup = () => {
  const [form] = Form.useForm();
  const { t, i18n } = useTranslation();
  const { Title } = Typography;
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="84">+84</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Row className="page">
      <Col xs={24} xl={9}></Col>
      <Col xs={24} xl={6}>
        <Card>
          <Title className="title" level={2}>
            {t("Signup")}
          </Title>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              prefix: "84",
            }}
            scrollToFirstError
          >
            <Form.Item
              name="fullName"
              label={t("Full Name")}
              rules={[
                {
                  required: true,
                  message: t("Please input your E-mail!"),
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label={t("E-mail")}
              rules={[
                {
                  type: "email",
                  message: t("The input is not valid E-mail!"),
                },
                {
                  required: true,
                  message: t("Please input your E-mail!"),
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label={t("Password")}
              rules={[
                {
                  required: true,
                  message: t("Please input your password!"),
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label={t("Confirm Password")}
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: t("Please confirm your password!"),
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        t("The two passwords that you entered do not match!"),
                      ),
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="phone"
              label={t("Phone Number")}
              rules={[
                {
                  required: true,
                  message: t("Please input your phone number!"),
                },
              ]}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                {t("Register")}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
      <Col xs={24} xl={9}></Col>
    </Row>
  );
};

export default Signup;
