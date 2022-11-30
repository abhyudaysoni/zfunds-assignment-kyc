import React from "react";
import { useSelector } from "react-redux";
import ConfirmPreviewCard from "../UI/confirm-preview-card";
import { Container } from "./styles";

const ConfirmPreview = () => {
  const state = useSelector((state) => state);
  return (
    <Container>
      <ConfirmPreviewCard
        heading="User Details:"
        footnotes=""
        content={[
          ["Is Indian Citizen", state.fatca.indianCitizen],
          ["Name", state.personal.name],
        ]}
      />
      <ConfirmPreviewCard
        heading="Personal Details:"
        footnotes="You cannot edit above details as they are already verified through Digilocker."
        content={[
          ["Gender", "Male"],
          ["Date of Birth", state.personal.dob],
          ["Address", state.personal.address],
        ]}
      />
      <ConfirmPreviewCard
        heading="KYC Details:"
        footnotes=""
        content={[
          ["Email", state.personal.email],
          ["Marital Status", state.personal.isMarried],
          ["Father's Name", state.personal.fatherName],
          ["Mother's Name", state.personal.motherName],
          ["Annual Income", state.personal.annualIncome],
        ]}
      />
      <ConfirmPreviewCard
        heading="Documents:"
        footnotes=""
        content={[
          ["Photo", "Image"],
          ["PAN Card", "Image"],
          ["Signature", "Image"],
        ]}
      />
    </Container>
  );
};

export default ConfirmPreview;
