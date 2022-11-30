import React from "react";
import PersonalDetailsForm from "../components/forms/personal-details/personal-details";
import SubHeader from "../components/sub-header/sub-header";

const PersonalDetails = () => {
  return (
    <>
      <SubHeader
        heading={"Personal Details"}
        subHeading={"Personal Details"}
        description={
          "These details are required to complete your KYC verification."
        }
      />
      <PersonalDetailsForm />
    </>
  );
};

export default PersonalDetails;
