import React from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import FormActions from "../form-actions/form-actions";
import DocToUpload from "./document/doc-to-upload";
import { useSelector } from "react-redux";
import { resetDocs } from "../../../store/documents-slice";
import { ref, deleteObject } from "firebase/storage";
import { storage } from "../../../firebaseConfig";

const UploadDocsForm = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const nextHandler = () => {
    navigate("/fatca-declaration");
  };
  const skipHandler = () => {
    const image1Ref = ref(storage, `${state.id}/pan`);
    const image2Ref = ref(storage, `${state.id}/photo`);
    const image3Ref = ref(storage, `${state.id}/signature`);
    const refs = [image1Ref, image2Ref, image3Ref];
    refs.map((item) => {
      deleteObject(item)
        .then(() => {})
        .catch((error) => {
          alert(error.message);
        });
      return item;
    });
    resetDocs();
    navigate("/fatca-declaration");
  };
  return (
    <Container>
      <div className="docs">
        <DocToUpload
          heading="PAN Card"
          description="Click a picture of your
PAN Card and upload"
          docType="pan"
          id={state.id}
          img={state.docs.pan}
        />

        <div className="break"></div>

        <DocToUpload
          heading="Signature"
          description="Sign on a blank white paper
(same as in Bank records).
Click a picture & upload."
          docType="signature"
          id={state.id}
          img={state.docs.signature}
        />

        <div className="break"></div>

        <DocToUpload
          heading="Photo"
          description="Upload your well lit, passport size photograph."
          docType="photo"
          id={state.id}
          img={state.docs.photo}
        />
      </div>

      <FormActions
        onNext={nextHandler}
        onSkip={skipHandler}
        heading="Uploaded documents will be removed"
        description="Are you sure?"
      />
    </Container>
  );
};

export default UploadDocsForm;
