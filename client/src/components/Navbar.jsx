import React, { use, useContext, useState } from "react";
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
  const { loginUser, setLoginUser, navigate } = useContext(AppContext);
  const [status, setStatus] = useState(false);

  const navigatorFunction = async (route) => {
    navigate("/" + route);
  };

  const handleFuntions = async (userType) => {
    setLoginUser(userType);
    setStatus(false);
    navigatorFunction(userType.toLowerCase());
  };

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
        <div className="flex gap-1 items-center justify-center cursor-pointer hover:underline">
          <p onClick={() => setStatus(true)}>{loginUser}</p>{" "}
          <IoMdArrowDropdown />
          {status && (
            <div className="absolute bg-white mt-10 p-3">
              <p
                onClick={() => handleFuntions("User")}
                className="hover:underline"
              >
                User
              </p>
              <p
                onClick={() => handleFuntions("Verifier")}
                className="hover:underline"
              >
                Verifier
              </p>
              <p
                onClick={() => handleFuntions("Admin")}
                className="hover:underline"
              >
                Admin
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
