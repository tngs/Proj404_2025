import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "../../components/NavigationBarTransporter/NavigationBar";
import Home from "./Home";
import ServicePage  from "./Service/ServicePage";
import MakeService from './MakeService/MakeService';
import Orders from './Orders/Orders'

const MainRoutes = () => {
  const [auth, setAuth] = useState(true);
  return <>
      <NavigationBar />
      {auth ? <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/service/:id" element={<ServicePage />} />
        <Route path="/make-service" element={<MakeService />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      : null}
    </>
};

export default MainRoutes;
