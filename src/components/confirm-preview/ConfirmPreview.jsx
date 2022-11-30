import React from "react";
import { useSelector } from "react-redux";
import ConfirmPreviewCard from "../UI/confirm-preview-card";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import Button from "../UI/button";
import { updateData } from "../../api/api";
import { resetPersonal } from "../../store/personal-slice";
import { resetDocs } from "../../store/documents-slice";
import { resetFatca } from "../../store/fatca-slice";

const ConfirmPreview = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const editHandler = (editRoute) => {
    navigate(editRoute);
  };
  const submitHandler = () => {
    updateData(state, state.id);
    navigate("/");
  };
  const cancelHandler = () => {
    resetPersonal();
    resetDocs();
    resetFatca();
    navigate("/");
  };
  return (
    <Container>
      <ConfirmPreviewCard
        heading="User Details:"
        footnotes=""
        content={[
          ["Is Indian Citizen", state.fatca.indianCitizen],
          ["Name", state.personal.name],
        ]}
        editable={true}
        onEdit={editHandler}
        editRoute="/fatca-declaration"
      />
      <ConfirmPreviewCard
        heading="Personal Details:"
        footnotes="You cannot edit above details as they are already verified through Digilocker."
        content={[
          ["Gender", "Male"],
          ["Date of Birth", state.personal.dob],
          ["Address", state.personal.address],
        ]}
        editable={false}
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
        editable={true}
        onEdit={editHandler}
        editRoute="/personal-details"
      />
      <ConfirmPreviewCard
        heading="Documents:"
        footnotes=""
        content={[
          ["Photo", "Image"],
          ["PAN Card", "Image"],
          ["Signature", "Image"],
        ]}
        editable={true}
        onEdit={editHandler}
        editRoute="/upload-docs"
      />
      <div className="terms-conditions">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          I have acknowledged all terms & conditions.
        </label>
      </div>
      <div className="confirm-actions">
        <Button id="submit" onClick={submitHandler}>
          Submit
        </Button>
        <Button id="cancel" onClick={cancelHandler}>
          Cancel
        </Button>
      </div>
    </Container>
  );
};

export default ConfirmPreview;
