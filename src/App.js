import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import DashboardAdmin from "./pages/dashboardAdmin";
import HomePage from "./pages/homePage";

function App() {
  return (
    <div className="bg-bg font-sans">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardAdmin />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
