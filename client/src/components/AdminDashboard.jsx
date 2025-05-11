import React, { useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import { AppContext } from "../context/AppContext";
import { GrCurrency } from "react-icons/gr";
import { MdPersonRemove } from "react-icons/md";
import {
  FaFilter,
  FaPiggyBank,
  FaSortAmountUp,
  FaUserCheck,
} from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { assets } from "../assets/assets";
import { BsBank2, BsThreeDotsVertical } from "react-icons/bs";
import MyLineChart from "./LineGraph";
import MyBarChart from "./BarGraph";
import BarGraphPaymentCollections from "./BarGraphPaymentCollections";
import { HiUserGroup } from "react-icons/hi";
import { GiBanknote } from "react-icons/gi";

const Loan = () => {
  const { navigate, verifierLoanData, setLoginUser } = useContext(AppContext);

  const getStatusBg = (status) => {
    switch (status) {
      case "pending":
        return (
          <p
            className="bg-amber-300 text-white w-25 text-[12px] h-8 rounded-2xl font-semibold 
            flex justify-center items-center cursor-pointer"
          >
            {status.toUpperCase()}
          </p>
        );
      case "verified":
        return (
          <p
            className="bg-[#29CC97] text-white w-25 text-[12px] h-8 rounded-2xl font-semibold 
            flex justify-center items-center cursor-pointer"
          >
            {status.toUpperCase()}
          </p>
        );
      case "rejected":
        return (
          <p
            className="bg-[#CC2929] text-white w-25 text-[12px] h-8 rounded-2xl font-semibold 
            flex justify-center items-center cursor-pointer"
          >
            {status.toUpperCase()}
          </p>
        );
      case "approved":
        return (
          <p
            className="bg-[#1829C7] text-white w-25 text-[12px] h-8 rounded-2xl font-semibold 
            flex justify-center items-center cursor-pointer "
          >
            {status.toUpperCase()}
          </p>
        );
      default:
        break;
    }
  };

  useEffect(() => {
    setLoginUser("Admin");
  }, []);
  return (
    <div className="flex">
      <div className="p-5 bg-gray-500/20 w-full">
        <p className="text-[#0A512F]">
          <span
            className="cursor-pointer hover:underline text-2xl font-semibold"
            onClick={() => navigate("/admin")}
          >
            Dashboard
          </span>
        </p>
        <div className="flex gap-3 flex-wrap mt-10">
          <div className="bg-white w-60 flex gap-3 items-center shadow-2xl">
            <div className="bg-[#0A512F] p-4">
              <HiUserGroup className="text-[#ffffff] text-4xl" />
            </div>
            <div>
              <p className="text-3xl font-semibold">200</p>
              <p className="text-xs font-semibold">ACTIVE USERS</p>
            </div>
          </div>
          <div className="bg-white flex w-60 gap-3 items-center shadow-2xl">
            <div className="bg-[#0A512F] p-4">
              <MdPersonRemove className="text-[#ffffff] text-4xl" />
            </div>
            <div>
              <p className="text-3xl font-semibold">100</p>
              <p className="text-xs font-semibold">BORROWERS</p>
            </div>
          </div>
          <div className="bg-white flex w-60 gap-3 items-center shadow-2xl">
            <div className="bg-[#0A512F] p-4">
              <GiBanknote className="text-[#ffffff] text-4xl" />
            </div>
            <div>
              <p className="text-3xl font-semibold">550,000</p>
              <p className="text-xs font-semibold">CASH DISBURSED</p>
            </div>
          </div>
          <div className="bg-white flex w-60 gap-3 items-center shadow-2xl">
            <div className="bg-[#0A512F] p-4">
              <FaPiggyBank className="text-[#ffffff] text-4xl" />
            </div>
            <div>
              <p className="text-3xl font-semibold">450,000</p>
              <p className="text-xs font-semibold">SAVINGS</p>
            </div>
          </div>
          <div className="bg-white flex w-60 gap-3 items-center shadow-2xl">
            <div className="bg-[#0A512F] p-4">
              <FaUserCheck className="text-[#ffffff] text-4xl" />
            </div>
            <div>
              <p className="text-3xl font-semibold">30</p>
              <p className="text-xs font-semibold">REPAID LOANS</p>
            </div>
          </div>
          <div className="bg-white flex w-60 gap-3 items-center shadow-2xl">
            <div className="bg-[#0A512F] p-4">
              <TbCurrencyNaira className="text-[#ffffff] text-4xl" />
            </div>
            <div>
              <p className="text-3xl font-semibold">1,000,000</p>
              <p className="text-xs font-semibold">CASH RECEIVED</p>
            </div>
          </div>
          <div className="bg-white flex w-60 gap-3 items-center shadow-2xl">
            <div className="bg-[#0A512F] p-4">
              <BsBank2 className="text-[#ffffff] text-4xl" />
            </div>
            <div>
              <p className="text-3xl font-semibold">10</p>
              <p className="text-xs font-semibold">Other Accounts</p>
            </div>
          </div>
          <div className="bg-white flex w-60 gap-3 items-center shadow-2xl">
            <div className="bg-[#0A512F] p-4">
              <GrCurrency className="text-[#ffffff] text-4xl" />
            </div>
            <div>
              <p className="text-3xl font-semibold">50</p>
              <p className="text-xs font-semibold">LOANS</p>
            </div>
          </div>
        </div>
        <div className="h-[600px] w-full bg-white p-5 mt-5 rounded">
          <div className="flex justify-between">
            <h1>Applied Loans</h1>
            <div className="flex gap-7">
              <div className="flex gap-1 justify-center items-center ">
                <FaSortAmountUp className="text-gray-400" />
                <p className="text-gray-500">Sort</p>
              </div>
              <div className="flex gap-1 justify-center items-center">
                <FaFilter className="text-gray-400" />
                <p className="text-gray-500">Filter</p>
              </div>
            </div>
          </div>
          <table className="md:table-auto table-fixed w-full">
            <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">
                  User Details
                </th>
                <th className="px-4 py-3 font-semibold truncate">Customer Name</th>
                <th className="px-4 py-3 font-semibold truncate">
                  Date
                </th>
                <th className="px-4 py-3 font-semibold truncate">Action </th>
              </tr>
            </thead>
            <tbody>
              {verifierLoanData.map((loan, index) => (
                <tr key={index} className="border-b border-gray-500/20">
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <div className="flex gap-1.5 items-center">
                      <img src={assets.user1} alt="user image" />
                      <div>
                        <p>{loan.message}</p>
                        <p className="text-gray-400 text-xs">
                          {loan.update_ago}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{loan.name}</p>
                    <p className="text-gray-400 text-xs">
                      {loan.credit_status}
                    </p>
                  </td>
                  <td>
                    <p>{loan.date_applied}</p>
                    <p className="text-gray-400 text-xs">{loan.time}</p>
                  </td>
                  <td>
                    <div className="flex items-center justify-center gap-5">
                      {getStatusBg(loan.status)}
                      <p>
                        <BsThreeDotsVertical className="text-gray-500/90 cursor-pointer" />
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <MyLineChart />
        <MyBarChart />
        <BarGraphPaymentCollections />
      </div>
    </div>
  );
};

export default Loan;
