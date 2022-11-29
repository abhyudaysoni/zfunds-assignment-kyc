import React from "react";
import MaritalStatus from "./marital-status/marital-status";
import { Container } from "./styles";
import Names from "./names/names";
import Email from "./email/email";
import Income from "./income/income";
import FormActions from "../form-actions/form-actions";
import { useNavigate } from "react-router-dom";
import { resetState } from "../../../store/personal-slice";
import { useDispatch } from "react-redux";

const PersonalDetailsForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nextHandler = () => {
    navigate("/upload-docs");
  };
  const skipHandler = () => {
    const res = prompt("Entered details will be erased. Are you sure? (y/n)");
    if (res === "n" || res === "") {
      return;
    }
    dispatch(resetState());
    navigate("/upload-docs");
  };
  return (
    <Container>
      <MaritalStatus />
      <Names />
      <Email />
      <Income />
      <FormActions onNext={nextHandler} onSkip={skipHandler} />
    </Container>
  );
};

export default PersonalDetailsForm;
