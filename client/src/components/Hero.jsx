import React, { useContext, useEffect, useState } from "react";
import { FaFilter, FaSearch, FaSortAmountUp } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";

const Hero = () => {
  const { allLoans } = useContext(AppContext);
  const [loans, setLoans] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

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
    setLoans(allLoans);
  }, [loans]);
  return (
    <div className="pt-25 flex flex-col items-center pb-25">
      <div className="w-3xl flex justify-between">
        <div>
          <div className="w-15 h-15 bg-green-700/70"></div>
          <p>DEFICIT</p>
          <TbCurrencyNaira />
          <span>0.0</span>
        </div>
        <button
          onClick={() => setShowPopup(true)}
          className="w-24 h-10 bg-gray-500 text-white p-1.5 rounded"
        >
          Get A Loan
        </button>
      </div>
      <div className="transction-list">
        <p className="borrow cash-option">Borrow Cash</p>
        <p className="bg-gray-500 h-13 w-0.5"></p>
        <p className=" cash-option">Transact</p>
        <p className="bg-gray-500 h-13 w-0.5"></p>
        <p className="cash-option">Deposit Cash</p>
      </div>
      <div className="flex items-center justify-center w-3xl m-5 search-box h-[55px] rounded">
        <FaSearch className="m-2" size={29} color="#7C7C7C" />
        <input
          type="text"
          placeholder="Search for loans"
          className="w-full ml-3 h-full outline-none text-2xl text-gray-500/80"
        />
      </div>
      <div className="h-[600px] w-2xl lg:w-4xl bg-white p-5 mt-5 rounded">
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
              <th className="px-4 py-3 font-semibold truncate">Loan Officer</th>
              <th className="px-4 py-3 font-semibold truncate">Amount</th>
              <th className="px-4 py-3 font-semibold truncate">Date Applied</th>
              <th className="px-4 py-3 font-semibold truncate">Status</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan, index) => (
              <tr key={index} className="border-b border-gray-500/20">
                <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                  <div className="flex gap-1.5 items-center">
                    <img src={assets.user1} alt="user image" />
                    <div>
                      <p>{loan.name}</p>
                      <p className="text-gray-400 text-xs">{loan.update_ago}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{loan.amount}</p>
                  <p className="text-gray-400 text-xs">{loan.credit_status}</p>
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
      
      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-blue-100/50 p-2 
          rounded-lg cursor-pointer"
        >
          <div className="bg-white flex justify-center text-gray-700 p-4 rounded relative w-full max-w-250">
            <div className="max-w-180">
              <div className="flex justify-between">
                <h1>APPLY FOR A LOAN</h1>{" "}
                <IoCloseCircleOutline
                  className="text-2xl"
                  onClick={() => setShowPopup(false)}
                />
              </div>
              <form>
                <div className="flex justify-between gap-15 mt-9">
                  <div>
                    <p>Full name as it appears on bank account</p>
                    <input
                      type="text"
                      placeholder="Full name as it appears on bank account"
                      className="mt-1 block w-76 border-2 rounded py-1 px-2 border-gray-400/50"
                    />
                  </div>
                  <div>
                    <p>How much do you need?</p>
                    <input
                      type="text"
                      placeholder="How much do you need?"
                      className="mt-1 block w-76 border-2 rounded py-1 px-2 border-gray-400/50"
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-15 mt-9">
                  <div>
                    <p>Loan tenure (in months)</p>
                    <input
                      type="text"
                      placeholder="Loan tenure (in months)"
                      className="mt-1 block w-76 border-2 rounded py-1 px-2 border-gray-400/50"
                    />
                  </div>
                  <div>
                    <p>Employment status</p>
                    <input
                      type="text"
                      placeholder="Employment status"
                      className="mt-1 block w-76 border-2 rounded py-1 px-2 border-gray-400/50"
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-15 mt-9">
                  <div>
                    <p>Reason for loan</p>
                    <textarea
                      type="text"
                      placeholder="Reason for loan"
                      className="mt-1 block w-76 h-26 border-2 rounded py-1 px-2 border-gray-400/50"
                    />
                  </div>
                  <div className="flex flex-col gap-7">
                    <div>
                      <p>Employment address</p>
                      <input
                        type="text"
                        placeholder="Employment address"
                        className="mt-1 block w-76 border-2 rounded py-1 px-2 border-gray-400/50"
                      />
                    </div>
                    <div>
                      <p>Employment address</p>
                      <input
                        type="text"
                        placeholder="Employment address"
                        className="mt-1 block w-76 border-2 rounded py-1 px-2 border-gray-400/50"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between gap-15 mt-9">
                  <div className="flex gap-3">
                    <input
                      type="radio"
                      id="radio"
                      className="self-start mt-2"
                    />
                    <label htmlFor="radio">
                      I have read the important information and accept that by
                      completing the application I will be bound by the terms
                    </label>
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="checkbox"
                      id="checkbox"
                      className="self-start mt-2"
                    />
                    <label htmlFor="checkbox">
                      Any personal and credit information obtained may be
                      disclosed from time to time to other lenders, credit
                      bureaus or other credit reporting agencies.
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="p-5 bg-[#0A5210] text-white rounded mt-9"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
