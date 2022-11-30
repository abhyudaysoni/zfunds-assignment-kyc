import React from "react";
import MaritalStatus from "./marital-status/marital-status";
import { Container } from "./styles";
import Names from "./names/names";
import Email from "./email/email";
import Income from "./income/income";
import FormActions from "../form-actions/form-actions";
import { useNavigate } from "react-router-dom";
import { resetPersonal } from "../../../store/personal-slice";

const PersonalDetailsForm = () => {
  const navigate = useNavigate();
  const nextHandler = () => {
    navigate("/upload-docs");
  };
  const skipHandler = () => {
    resetPersonal();
    navigate("/upload-docs");
  };
  return (
    <Container>
      <MaritalStatus />
      <Names />
      <Email />
      <Income />
      <FormActions
        onNext={nextHandler}
        onSkip={skipHandler}
        heading="Entered details will be lost"
        description="Are you sure?"
      />
    </Container>
  );
};

export default PersonalDetailsForm;
