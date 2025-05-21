import React from "react";
import { useEffect, useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// react-router
import Simple from "./pages/Simple";
import UserRoute from "./pages/User/UserRoute";
import TransporterRoute from "./pages/Transporter/TransporterRoute";
import AdminRoute from "./pages/Admin/AdminRoute";
import Login from "./pages/Login";

//redux
import { useSelector } from "react-redux";
import { loadAccount } from "./redux/actions/account";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const ProtectedRoutes = ({path, element, condition}) => {
    return condition ? <Route path={path} element={element} /> : null;
  };
  return (
    <Routes>
      <Route path="/" element={<UserRoute />} />
      {/* {ProtectedRoutes({path: "/user/*", element: <UserRoute />, condition: account.loggedIn && account.user.role === "user"})} */}
      {ProtectedRoutes({path: "/transporter/*", element: <TransporterRoute />, condition: account.loggedIn && account.user.role === "transporter"})}
      {ProtectedRoutes({path: "/admin/*", element: <AdminRoute />, condition: account.loggedIn && account.user.role === "admin"})}
      <Route path="/login" element={<Login />} />
      <Route path="/simple" element={<Simple />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
