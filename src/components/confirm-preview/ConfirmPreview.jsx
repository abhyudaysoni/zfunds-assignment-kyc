import React, { useState } from "react";
import { useSelector } from "react-redux";
import ConfirmPreviewCard from "../UI/confirm-preview-card";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import Button from "../UI/button";
import { updateData, useGetData } from "../../api/api";
import { resetPersonal } from "../../store/personal-slice";
import { resetDocs } from "../../store/documents-slice";
import { resetFatca } from "../../store/fatca-slice";

const ConfirmPreview = () => {
  useGetData();
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const [terms, setTerms] = useState(false);
  const editHandler = (editRoute) => {
    navigate(editRoute);
  };
  const termsHandler = (e) => {
    console.log(e);
    setTerms(!terms);
  };
  const submitHandler = () => {
    if (!terms) {
      alert("Check Terms First");
      return;
    }
    const agreedToTerms = true;
    updateData({ ...state, agreedToTerms: agreedToTerms }, state.id);
    navigate("/success");
  };
  const cancelHandler = () => {
    resetPersonal();
    resetDocs();
    resetFatca();
    updateData(state, state.id);
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
          ["Gender", state.personal.gender],
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
          ["Marital Status", state.personal.married],
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
          ["Photo", state.docs.photo],
          ["PAN Card", state.docs.pan],
          ["Signature", state.docs.signature],
        ]}
        editable={true}
        onEdit={editHandler}
        editRoute="/upload-docs"
      />
      {state.docs.pan.includes("https://") &&
        state.docs.photo.includes("https://") &&
        state.docs.signature.includes("https://") && (
          <div className="terms-conditions">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              value={terms}
              onChange={termsHandler}
            />
            <label htmlFor="terms">
              I have acknowledged all terms & conditions.
            </label>
          </div>
        )}
      <div className="confirm-actions">
        {state.docs.pan.includes("https://") &&
          state.docs.photo.includes("https://") &&
          state.docs.signature.includes("https://") && (
            <Button id="submit" onClick={submitHandler}>
              Submit
            </Button>
          )}
        {(!state.docs.pan.includes("https://") ||
          !state.docs.photo.includes("https://") ||
          !state.docs.signature.includes("https://")) && (
          <h4>
            You have not uploaded all the documents. You can not submit the
            form.
          </h4>
        )}
        <Button id="cancel" onClick={cancelHandler}>
          Cancel and go back
        </Button>
      </div>
    </Container>
  );
};

export default ConfirmPreview;
