import React from "react";
import { Routes, Route } from "react-router-dom";
import ConfirmDetails from "./pages/confirm-details";
import FATCADeclaration from "./pages/fatca-declaration";
import Home from "./pages/home";
import PersonalDetails from "./pages/personal-details";
import UploadDocs from "./pages/upload-docs";
import SuccessModal from "./pages/success-modal";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="personal-details" element={<PersonalDetails />} />
      <Route path="upload-docs" element={<UploadDocs />} />
      <Route path="fatca-declaration" element={<FATCADeclaration />} />
      <Route path="confirm-details" element={<ConfirmDetails />} />
      <Route path="success" element={<SuccessModal />} />
    </Routes>
  );
};

export default AppRoutes;
