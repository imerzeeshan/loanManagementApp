import React, { useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { AppContext } from "../context/AppContext";

const Verifier = () => {
  const { loginUser, setLoginUser } = useContext(AppContext);

  useEffect(() => {
    setLoginUser("Verifier");
  }, [loginUser]);
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="bg-gray-500/20 w-full">
          <h1 className="mt-10 ml-20">Verifier Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Verifier;
