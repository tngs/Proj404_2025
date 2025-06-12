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
import PaymentPage from "./Payment/PaymentPage";
import PaymentDetailPage from "./Payment/PaymentDetailPage";
import { useSelector } from "react-redux";

const MainRoutes = () => {
  const account = useSelector((state) => state.account);
  return (
    <>
      <NavigationBarUser />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ServicePage />} />
        <Route path="/pnf" element={<PageNotFound />} />
        {account.loggedIn && account.role === "user" && (
          <>
            <Route path="/paid-orders" element={<PaidOrders />} />
            <Route path="/unpaid-orders" element={<UnpaidOrders />} />
            <Route path="/order/:id" element={<OrderPage />} />
            <Route path="/orderDetail/:id" element={<OrderDetailPage />} />
          </>
        )}
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment/detail/:id" element={<PaymentDetailPage />} />}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
