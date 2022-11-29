import React from "react";
import { Container } from "./styles";
import Button from "../../UI/button";

const FormActions = ({ onNext, onSkip }) => {
  return (
    <Container>
      <Button className="next" onClick={onNext}>
        Next
      </Button>
      <Button className="skip" onClick={onSkip}>
        skip for now
      </Button>
    </Container>
  );
};

export default FormActions;
