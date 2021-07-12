import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { useTranslation } from "react-i18next";
import { Header } from "antd/lib/layout/layout";

const HeaderLayout = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo"></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["3"]}>
          <Menu.Item key="1" style={{ paddingTop: "15px" }}>
            <img src="https://d1842wf5bcpgkm.cloudfront.net/images/Global/logo_header.svg" />
          </Menu.Item>
          <Menu.Item key="2">{t("Home")}</Menu.Item>
          <Menu.Item key="3">{t("List Employee")}</Menu.Item>
        </Menu>
      </Header>
    </>
  );
};

export default HeaderLayout;
