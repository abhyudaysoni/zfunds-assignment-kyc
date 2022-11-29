import React from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import FormActions from "../form-actions/form-actions";
import DocToUpload from "./document/doc-to-upload";

const UploadDocsForm = () => {
  const navigate = useNavigate();
  const nextHandler = () => {
    navigate("/fatca-declaration");
  };
  const skipHandler = () => {
    navigate("/fatca-declaration");
  };
  return (
    <Container>
      <div className="docs">
        <DocToUpload
          heading="PAN Card"
          description="Click a picture of your
PAN Card and upload"
        />
        <div className="break"></div>
        <DocToUpload
          heading="Signature"
          description="Sign on a blank white paper
(same as in Bank records).
Click a picture & upload."
        />
      </div>
      <FormActions onNext={nextHandler} onSkip={skipHandler} />
    </Container>
  );
};

export default UploadDocsForm;