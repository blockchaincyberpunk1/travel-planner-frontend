import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Typography } from "antd";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

const { Title } = Typography;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dispatch login action
    dispatch(loginUser({ email, password }));
    // Redirect after login (you might want to adjust the redirection logic based on the login response)
    navigate("/");
  };

  return (
    <div style={{ maxWidth: "300px", margin: "0 auto", padding: "20px" }}>
      <Title level={2}>Login</Title>
      <Form onFinish={handleLogin}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
