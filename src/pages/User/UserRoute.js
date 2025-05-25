import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "../../components/NavigationBarUser/NavigationBar";
// import ServiceListPage from '../pages/ServiceListPage';
// import ServiceDetailPage from '../pages/ServiceDetailPage'
// import ProfilePage from '../pages/ProfilePage';
import Home from "./Home";
import SimplePage from "../Simple";
import ProfilePage from "../Profile";
import PageNotFoundPage from "../PageNotFound";
import ServicePage from "./Service/ServicePage";
import OrderPage from "./Order/OrderPage";
import OrderDetailPage from "./Order/OrderDetailPage";
import PageNotFound from "../PageNotFound";

import { useSelector } from "react-redux"; // Import useSelector from react-redux

const MainRoutes = () => {
  const [auth, setAuth] = useState(true);
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ServicePage />} />
        <Route path="/order/:id" element={<OrderPage />} />
        <Route path="/orderDetail/:id" element={<OrderDetailPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/profile/" element={<PageNotFoundPage />} />
        <Route path="/pnf" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
