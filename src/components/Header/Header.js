import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/plans">Plans</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/register">Register</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
