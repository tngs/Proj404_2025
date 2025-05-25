import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import NavigationBarAdmin from "../../components/NavigationBarAdmin/NavigationBar";
// import ServiceListPage from '../pages/ServiceListPage';
// import ServiceDetailPage from '../pages/ServiceDetailPage'
// import ProfilePage from '../pages/ProfilePage';
import Home from "./Home/AdminPage";
import SimplePage from "../Simple";
import ServicePage  from "./Service/ServicePage";

import { useSelector } from "react-redux"; // Import useSelector from react-redux

const MainRoutes = () => {
  const [auth, setAuth] = useState(true);//make it better
  return <>
      <NavigationBarAdmin />
      {auth ? <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/service/:id" element={<ServicePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      : null}
    </>
};

export default MainRoutes;
