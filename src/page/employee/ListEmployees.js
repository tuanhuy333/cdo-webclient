import React, { useState, useEffect, useMemo } from "react";
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
import TableEmployee from "../../components/employee/tableEmployee";
import HeaderLayout from "../../components/header/header";

import { Layout, Menu, Breadcrumb } from "antd";

const ListEmployees = () => {
  const { Header, Content, Footer } = Layout;
  const { t, i18n } = useTranslation();
  const { Title } = Typography;
  const [employees, setEmployees] = useState([]);
  const [dataEmpl, setDataEmpl] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [word, setWord] = useState(false);

  const fectAPIGetEmployee = () => {
    getEmployeeAPI().then(({ data }) => {
      const listEmp = data.data.map((e) => {
        return {
          id: e.id,
          name: e.name,
          email: e.email,
          gender: e.gender,
        };
      });
      setEmployees(listEmp);
      setDataEmpl(listEmp);
    });
  };

  useEffect(() => {
    fectAPIGetEmployee();
  }, []);

  const onChangeSearch = (e) => {
    var condition = e.target.value;
    var empFilter = [...employees];
    if (condition !== "") {
      setDataEmpl(
        empFilter.filter(
          (x) =>
            x.name.includes(condition) ||
            x.email.includes(condition) ||
            x.gender.includes(condition),
        ),
      );
    } else {
      setDataEmpl(employees);
    }
  };

  const onSuccess = (values) => {
    var listEmployees = [...dataEmpl];
    var generatorId = Math.max(...listEmployees.map((x) => x.id));
    values.id = generatorId + 1;
    listEmployees.push(values);

    setDataEmpl(listEmployees);
    setEmployees(listEmployees);
    setOpenModal(false);
  };

  // const computeLetterCount = (word) => {
  //   let i = 0;
  //   while (i < 1000000000) i++;
  //   return word.length;
  // };

  // const letterCount = useMemo(() => computeLetterCount(word), [word]);

  return (
    <>
      <Layout>
        <HeaderLayout />
        <Content>
          <Row className="page">
            <Col xs={24} xl={4}></Col>
            <Col xs={24} xl={16}>
              <TableEmployee
                dataEmpl={dataEmpl}
                onChangeSearch={(e) => onChangeSearch(e)}
                setOpenModal={() => setOpenModal(true)}
              />
            </Col>
            <Col xs={24} xl={4}></Col>
            <EmployeeModal
              openModal={openModal}
              offModal={() => setOpenModal(false)}
              onSuccess={(e) => onSuccess(e)}
            />
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default ListEmployees;
