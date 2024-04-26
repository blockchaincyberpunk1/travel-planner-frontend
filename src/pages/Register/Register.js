import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Typography } from "antd";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/userActions";

const { Title } = Typography;

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    // Dispatch register action
    dispatch(registerUser(userData));
    // Redirect to login page after successful registration
    navigate("/login");
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ maxWidth: "300px", margin: "0 auto", padding: "20px" }}>
      <Title level={2}>Register</Title>
      <Form onFinish={handleRegister}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
