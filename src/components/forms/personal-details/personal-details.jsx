import React from "react";
import MaritalStatus from "./marital-status/marital-status";
import { Container } from "./styles";
import Names from "./names/names";
import Email from "./email/email";
import Income from "./income/income";
import Button from "../../UI/button";

const PersonalDetailsForm = () => {
  return (
    <Container>
      <MaritalStatus />
      <Names />
      <Email />
      <Income />
      <nav>
        <Button className="next">Next</Button>
        <Button className="skip">skip for now</Button>
      </nav>
    </Container>
  );
};

export default PersonalDetailsForm;
