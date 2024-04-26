import React from "react";
import { Link } from "react-router-dom";
import { Layout, Typography } from "antd";
import MapComponent from "../../components/Map/Map";

const { Content } = Layout;
const { Title } = Typography;

const Home = () => {
  return (
    <Layout>
      <Content
        style={{ padding: "50px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <Title level={2}>Welcome to Travel Planner</Title>
        <p>Plan your trips and explore new destinations with ease.</p>

        {/* Example Map - You can adjust or remove this based on your needs */}
        <MapComponent center={[51.505, -0.09]} zoom={13} />

        {/* Navigation Links */}
        <div style={{ marginTop: "20px" }}>
          <Link to="/plans">View Plans</Link> |{" "}
          <Link to="/create">Create New Plan</Link>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
