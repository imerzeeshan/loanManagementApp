import React, { useContext } from "react";
import {
  FaBriefcase,
  FaChartBar,
  FaCreditCard,
  FaPiggyBank,
  FaRegShareSquare,
  FaSignature,
  FaSignOutAlt,
  FaUserCircle,
  FaUserCog,
  FaUserMinus,
} from "react-icons/fa";
import { IoSpeedometerSharp } from "react-icons/io5";
import { GrCurrency, GrNotes } from "react-icons/gr";
import { BsCalendarCheckFill, BsFillPersonCheckFill } from "react-icons/bs";
import { FaScaleBalanced } from "react-icons/fa6";
import { TbSettingsCog } from "react-icons/tb";
import { AppContext } from "../context/AppContext";

function AdminSidebar() {
  const { navigate } = useContext(AppContext);
  return (
    <div className="bg-[#184f27] min-h-200">
      <div className=" flex gap-3 items-center bg-[#000000] text-[#ADCF1A] w-60 text-2xl p-5">
        <FaUserCircle />
        <p>Najeeb</p>
      </div>
      <div>
        <div
          onClick={() => navigate("/admin")}
          className="flex gap-2 items-center text-xl pl-5 p-2 text-white shadow"
        >
          <IoSpeedometerSharp />
          <p>Dashboard</p>
        </div>
        <div
          onClick={() => navigate("/admin/borrowers")}
          className="flex gap-2 items-center text-xl pl-5 p-2 text-white shadow"
        >
          <FaUserMinus />
          <p>Borrowers</p>
        </div>
        <div
          onClick={() => navigate("/admin/loan")}
          className="flex gap-2 items-center text-xl pl-5 p-2 text-white shadow"
        >
          <GrCurrency />
          <p>Loans</p>
        </div>
        <div className="flex gap-2 items-center text-xl pl-5 p-2 text-white shadow">
          <BsFillPersonCheckFill />
          <p>Repayments</p>
        </div>
        <div className="flex gap-2 items-center text-xl pl-5 p-2 text-white shadow">
          <FaScaleBalanced />
          <p>Loan Parameters</p>
        </div>
        <div className="flex gap-2 items-center text-xl pl-5 p-2 text-white shadow">
          <FaCreditCard />
          <p>Accounting</p>
        </div>
        <div className="flex gap-2 items-center text-xl pl-5 p-2 text-white shadow">
          <FaChartBar />
          <p>Reports</p>
        </div>
        <div className="flex gap-2 items-center text-xl pl-5 p-2 text-white shadow">
          <GrNotes />
          <p>Collateral</p>
        </div>
        <div className="flex gap-2 items-center text-xl pl-5 p-2 text-white shadow">
          <FaUserCog />
          <p>Access Configuration</p>
        </div>
        <div className="flex gap-2 items-center text-xl pl-5 p-2 text-white shadow">
          <FaPiggyBank />
          <p>Savings</p>
        </div>
        <div className="flex gap-2 items-center text-xl pl-5 p-2 text-white shadow">
          <FaRegShareSquare />
          <p>Expenses</p>
        </div>
        <div className="flex gap-2 items-center text-xl pl-5 p-2 text-white shadow">
          <FaSignature />
          <p>E-signarure</p>
        </div>
        <div className="flex gap-2 items-center text-xl pl-5 p-2 text-white shadow">
          <FaBriefcase />
          <p>Investor Accounts</p>
        </div>
        <div className="flex gap-2 items-center text-xl pl-5 p-2 text-white shadow">
          <BsCalendarCheckFill />
          <p>Investor Accounts</p>
        </div>
        <div className="flex gap-2 items-center text-xl pl-5 p-2 text-white shadow">
          <TbSettingsCog />
          <p>Investor Accounts</p>
        </div>
        <div className="flex gap-2 items-center text-xl pl-5 p-2 text-white shadow">
          <FaSignOutAlt />
          <p>Sign Out</p>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
