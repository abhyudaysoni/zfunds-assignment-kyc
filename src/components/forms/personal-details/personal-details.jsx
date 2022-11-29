import React from "react";
import MaritalStatus from "../marital-status/marital-status";
import Bio from "../bio/bio";
import { Container } from "./styles";

const PersonalDetailsForm = () => {
  return (
    <Container>
      <MaritalStatus />
      <Bio />
    </Container>
  );
};

export default PersonalDetailsForm;
