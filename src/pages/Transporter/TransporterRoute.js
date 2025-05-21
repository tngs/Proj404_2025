import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
// import ServiceListPage from '../pages/ServiceListPage';
// import ServiceDetailPage from '../pages/ServiceDetailPage'
// import ProfilePage from '../pages/ProfilePage';
import Home from "./Home";
import SimplePage from "../Simple";
import ProfilePage from "../Profile";
import PageNotFoundPage from "../PageNotFound";
import ServicePage  from "./Service/ServicePage";

import { useSelector } from "react-redux"; // Import useSelector from react-redux

const MainRoutes = () => {
  const [auth, setAuth] = useState(true);
  return <>
      <NavigationBar />
      {auth ? <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ServicePage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/profile/" element={<PageNotFoundPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      : null}
    </>
};

export default MainRoutes;
