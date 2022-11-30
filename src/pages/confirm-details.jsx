import React from "react";
import ConfirmPreview from "../components/confirm-preview/ConfirmPreview";
import SubHeader from "../components/sub-header/sub-header";

const ConfirmDetails = () => {
  return (
    <>
      <SubHeader
        heading={"KYC Details"}
        subHeading={"Confirm Details"}
        description={
          "Read below details carefully, they cannot be changed later."
        }
      />
      <ConfirmPreview />
    </>
  );
};

export default ConfirmDetails;
