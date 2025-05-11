import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import AdminSidebar from "./AdminSidebar";

const AdminLoan = () => {
  const { navigate, setLoginUser } = useContext(AppContext);

  useEffect(() => {
    setLoginUser("Admin");
  }, []);
  return (
    <div>
      <div className="flex">
        <AdminSidebar />
        <div className="bg-gray-500/20 w-full">
          <p className="text-[#0A512F]">
            <span
              className="cursor-pointer hover:underline"
              onClick={() => navigate("/admin")}
            >
              Dashboard
            </span>{" "}
            {">"} <span className="text-2xl">Loan</span>
          </p>
          <h1 className="mt-10 ml-20">Admin Loan</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminLoan;
