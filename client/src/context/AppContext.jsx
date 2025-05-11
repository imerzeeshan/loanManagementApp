import { createContext, use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyData, dummyVerifierData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const navigate = useNavigate();
  const [allLoans, setAllLoans] = useState([]);
  const [verifierLoanData, setVerifierLoanData] = useState([]);
  const [loginUser, setLoginUser] = useState("User");

  const fetchAllLoans = async () => {
    setAllLoans(dummyData);
    setVerifierLoanData(dummyVerifierData);
  };

  useEffect(() => {
    fetchAllLoans();
  }, []);

  const value = {
    allLoans,
    setAllLoans,
    navigate,
    loginUser,
    setLoginUser,
    verifierLoanData,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
