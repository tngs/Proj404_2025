import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <div className="auth-container">
        <img src="/logo.png" alt="Logo" style={{ width: "100px" }} />
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <button onClick={() => navigate("/")}>Go to Home</button>
      </div>
    </div>
  );
};

export default NotFound;