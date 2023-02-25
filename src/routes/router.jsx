import { Routes } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/homePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardAdmin />} />
    </Routes>
  );
};

export default Router;
