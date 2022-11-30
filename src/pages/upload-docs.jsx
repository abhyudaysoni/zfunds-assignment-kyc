import React from "react";
import SubHeader from "../components/sub-header/sub-header";
import UploadDocsForm from "../components/forms/upload-docs/upload-docs";

const UploadDocs = () => {
  return (
    <>
      <SubHeader
        heading={"Upload Documents"}
        subHeading={"Upload"}
        description={
          "These documents are required to complete your KYC verification."
        }
      />
      <UploadDocsForm />
    </>
  );
};

export default UploadDocs;
