import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import AdminSidebar from "../components/AdminSidebar";
import AdminDashboard from "../components/AdminDashboard";

const Admin = () => {
  const { setLoginUser } = useContext(AppContext);

  useEffect(() => {
    setLoginUser("Admin");
  }, []);
  return (
    <div>
      <div className="flex">
        <AdminSidebar />
        <AdminDashboard />
      </div>
    </div>
  );
};

export default Admin;
