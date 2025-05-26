import "./App.css";

// react-router
import { Routes, Route, Navigate } from "react-router-dom";
import Simple from "./pages/Simple";
import UserRoute from "./pages/User/UserRoute";
import TransporterRoute from "./pages/Transporter/TransporterRoute";
import AdminRoute from "./pages/Admin/AdminRoute";
import Login from "./pages/Login";
import AdminLoginPage from "./pages/Admin/Login/LoginPage";

//redux
import { useSelector } from "react-redux";

function App() {
  const account = useSelector((state) => state.account);
  const ProtectedRoutes = ({ path, element, condition }) => {
    return condition ? <Route path={path} element={element} /> : null;
  };
  return (
    <Routes>
      <Route path="/simple" element={<Simple />} />
      
      <Route path="/login" element={<Login />} />
      {ProtectedRoutes({
        path: "/transporter/*",
        element: <TransporterRoute />,
        condition: account.loggedIn && account.role === "transporter",
      })}
      {ProtectedRoutes({
        path: "/admin/*",
        element: <AdminRoute />,
        condition: account.loggedIn && account.role === "admin",
      })}
      <Route path="/admin-login" element={<AdminLoginPage />} />
      <Route path="/*" element={<UserRoute />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
