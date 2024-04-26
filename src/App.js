import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import 'antd/dist/antd.css';

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Plans from "./pages/Plans/Plans"; 
import CreatePlan from './pages/CreatePlan/CreatePlan';
import PlanDetail from "./pages/PlanDetail/PlanDetail";
import HeaderComponent from "./components/Header/Header";

function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/create" element={<CreatePlan />} />
        <Route path="/plan/:planId" element={<PlanDetail />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
