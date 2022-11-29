import React from "react";
import PersonalDetailsForm from "../../components/forms/personal-details/personal-details";
import SubHeader from "../../components/sub-header/sub-header";
import { Container } from "./styles";

const PersonalDetails = () => {
  return (
    <Container>
      <SubHeader
        heading={"Personal Details"}
        subHeading={"Personal Details"}
        description={
          "These details are required to complete your KYC verification."
        }
      />
      <PersonalDetailsForm />
    </Container>
  );
};

export default PersonalDetails;
