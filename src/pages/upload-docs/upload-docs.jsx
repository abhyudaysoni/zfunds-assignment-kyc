import React from "react";
import { Container } from "./styles";
import SubHeader from "../../components/sub-header/sub-header";
import UploadDocsForm from "../../components/forms/upload-docs/upload-docs";

const UploadDocs = () => {
  return (
    <Container>
      <SubHeader
        heading={"Upload Documents"}
        subHeading={"Upload"}
        description={
          "These documents are required to complete your KYC verification."
        }
      />
      <UploadDocsForm />
    </Container>
  );
};

export default UploadDocs;
