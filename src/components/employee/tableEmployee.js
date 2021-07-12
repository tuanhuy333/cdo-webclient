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
  Table,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import "../../assets/list-employee.css";
import { getEmployeeAPI } from "../../services/employee";
import EmployeeModal from "../../components/employee/employee.modal";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
];

const TableEmployee = (props) => {
  const { dataEmpl, onChangeSearch, setOpenModal } = props;

  const { t, i18n } = useTranslation();
  const { Title } = Typography;

  return (
    <>
      <Title className="title" level={2}>
        {t("List Employees")}
      </Title>
      <Button type="primary" onClick={() => setOpenModal()}>
        {t("Add Employee")}
      </Button>
      <Input.Search
        allowClear
        className="search"
        onChange={(e) => onChangeSearch(e)}
        defaultValue=""
      />
      <Table dataSource={dataEmpl} columns={columns} />;
    </>
  );
};

export default TableEmployee;
