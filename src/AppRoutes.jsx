import React from "react";
import { Routes, Route } from "react-router-dom";
import ConfirmDetails from "./pages/confirm-details/confirm-details";
import FATCADeclaration from "./pages/fatca-declaration/fatca-declaration";
import Home from "./pages/home/home";
import PersonalDetails from "./pages/personal-details/personal-details";
import UploadDocs from "./pages/upload-docs/upload-docs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="personal-details" element={<PersonalDetails />} />
      <Route path="upload-docs" element={<UploadDocs />} />
      <Route path="fatca-declaration" element={<FATCADeclaration />} />
      <Route path="confirm-details" element={<ConfirmDetails />} />
    </Routes>
  );
};

export default AppRoutes;
