import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Sidebar/Navbar";
import { useSelector } from "react-redux";

export const Admin = () => {
  const { token } = useSelector((state) => state.auth);

  const isAuthenticated = token !== null;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const sidebar = isAuthenticated ? <Sidebar /> : null;

  return (
    <div className="">
      <div className="md:pl-16 lg:hidden">
        <Navbar />
      </div>
      <div className="hidden lg:block ">{sidebar}</div>
      <div className="lg:ml-24 mx-5 mt-3">
        <Outlet />
      </div>
    </div>
  );
};
