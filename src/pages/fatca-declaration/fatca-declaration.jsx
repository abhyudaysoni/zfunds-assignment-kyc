import React from "react";
import { Container } from "./styles";
import SubHeader from "../../components/sub-header/sub-header";
import FATCADeclarationForm from "../../components/forms/fatca-declaration/fatca-declaration";

const FATCADeclaration = () => {
  return (
    <Container>
      <SubHeader
        heading={"FATCA Declaration"}
        subHeading={"Declaration"}
        description={"Declare your FATCA details."}
      />
      <FATCADeclarationForm />
    </Container>
  );
};

export default FATCADeclaration;
