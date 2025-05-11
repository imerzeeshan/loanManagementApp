import React, { useContext, useState } from "react";
import { MdNotifications } from "react-icons/md";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaTachometerAlt } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaBook } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { loginUser, setLoginUser } = useContext(AppContext);

  return (
    <div className="nav-container">
      <h1>CREDIT APP</h1>
      {loginUser === "User" && (
        <div className="nav-items">
          <div className="flex gap-1 items-center justify-center">
            <FaTachometerAlt />
            <p>Home</p>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <TbCurrencyNaira />
            <p>Payments</p>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <FaBook />
            <p>budget</p>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <MdPayment />
            <p>Card</p>
          </div>
        </div>
      )}
      <div className="flex gap-4">
        <MdNotifications size={24} />
        <BiSolidMessageRoundedDots size={24} />
        <FaUserCircle size={24} />
        <div
          onClick={() => setStatus(true)}
          className="flex gap-1 items-center justify-center"
        >
          <p>{loginUser}</p> <IoMdArrowDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
