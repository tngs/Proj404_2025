import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";

export default function AdminLoginRoute() {
	console.log("AdminLoginRoute");
  return (
    <Navigate to="/login" replace state={{ role: 'admin' }}/>
  )
}