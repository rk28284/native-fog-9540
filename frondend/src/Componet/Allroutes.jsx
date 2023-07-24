import React from "react";
import { Route, Routes } from "react-router-dom";
import { Notfound } from "../Pages/Notfound";
import { Dashboard } from "../Pages/Dashboard";
import { Repo } from "../Pages/Repo";
import SignIn from "../Pages/SigInPage";
import SignUp from "../Pages/SignUpPage";
import { HomePage } from "../Pages/HomePage";
import { Singlerepo } from "../Pages/Singlerepo";
export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/repo" element={<Repo />} />
        <Route path="/" element={<HomePage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/singlerepo" element={<Singlerepo/>} />
      </Routes>
    </div>
  );
};
