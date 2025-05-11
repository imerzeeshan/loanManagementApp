import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Verifier from "./pages/Verifier";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Loan from "./components/Loan";
import AdminLoan from "./components/AdminLoan";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verifier" element={<Verifier />} />
        <Route path="/verifier/loan" element={<Loan />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/loan" element={<AdminLoan />} />
      </Routes>
    </div>
  );
}

export default App;
