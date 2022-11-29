import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import PersonalDetails from "./pages/personal-details/personal-details";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="personal-details" element={<PersonalDetails />} />
    </Routes>
  );
};

export default AppRoutes;
