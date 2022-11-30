import React from "react";
import SubHeader from "../components/sub-header/sub-header";
import FATCADeclarationForm from "../components/forms/fatca-declaration/fatca-declaration";

const FATCADeclaration = () => {
  return (
    <>
      <SubHeader
        heading={"FATCA Declaration"}
        subHeading={"Declaration"}
        description={"Declare your FATCA details."}
      />
      <FATCADeclarationForm />
    </>
  );
};

export default FATCADeclaration;
