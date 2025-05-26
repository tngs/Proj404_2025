import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBarUser from "../../components/NavigationBarUser/NavigationBar";
// import ServiceListPage from '../pages/ServiceListPage';
// import ServiceDetailPage from '../pages/ServiceDetailPage'
// import ProfilePage from '../pages/ProfilePage';
import Home from "./Home/Home";
import ServicePage from "./Service/ServicePage";
import OrderPage from "./Order/OrderPage";
import OrderDetailPage from "./Order/OrderDetailPage";
import PageNotFound from "../PageNotFound";
import PaidOrders from "./Orders/PaidOrders/PaidOrders";
import UnpaidOrders from "./Orders/UnpaidOrders/UnpaidOrders";
const MainRoutes = () => {
  return (
    <>
      <NavigationBarUser />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paid-orders" element={<PaidOrders />} />
        <Route path="/unpaid-orders" element={<UnpaidOrders />} />
        <Route path="/service/:id" element={<ServicePage />} />
        <Route path="/order/:id" element={<OrderPage />} />
        <Route path="/orderDetail/:id" element={<OrderDetailPage />} />

        <Route path="/pnf" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
