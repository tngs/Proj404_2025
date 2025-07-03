import { useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBarAdmin from "../../components/NavigationBarAdmin/NavigationBar";
import Home from "./Home/AdminPage";
import AdminUsersPage from './Users/AdminUsersPage';
import AdminTransporterPage from './Transporter/AdminTransporterPage';
import ServicePage from "./Service/ServicePage";
import PermitPage from "./PermitPage/PermitPage";

const MainRoutes = () => {
  const [auth, setAuth] = useState(true);//make it better
  //TODO check the permit here
  return <>
      <NavigationBarAdmin />
      {auth ? <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<AdminUsersPage />} />
        <Route path="/transporters" element={<AdminTransporterPage />} />
        <Route path="/service/:id" element={<ServicePage/>} />
        <Route path="/permit" element={<PermitPage/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      : null}
    </>
};

export default MainRoutes;
