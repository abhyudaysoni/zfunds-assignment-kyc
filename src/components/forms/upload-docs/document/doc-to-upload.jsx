import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import docContainer from "../../../../assets/doc-container.svg";
import deleteDoc from "../../../../assets/delete-doc.svg";
import { ref, uploadBytes, deleteObject } from "firebase/storage";
import { storage } from "../../../../firebaseConfig";
import { useGetData } from "../../../../api/api";

const DocToUpload = ({ heading, description, docType, id, img }) => {
  const [doc, setDoc] = useState(null);
  const uploadDocHandler = (e) => {
    setDoc(e.target.files[0]);
  };
  useGetData();
  const imageRef = ref(storage, `${id}/${docType}`);
  useEffect(() => {
    if (doc === null) {
      return;
    }
    uploadBytes(imageRef, doc).then((res) => {});
    setDoc(null);
  }, [doc, docType, id, imageRef]);
  const deleteDocHandler = () => {
    deleteObject(imageRef)
      .then(() => {})
      .catch((error) => {
        alert(error.message);
      });
    setDoc(null);
  };
  return (
    <Container>
      <div className="document-description">
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
      <div className="document-container">
        <input
          type="file"
          id={`${docType}-input`}
          onChange={uploadDocHandler}
          accept=".jpg, .pdf, .png, .jpeg"
        />
        <label htmlFor={`${docType}-input`}>
          {!img && <img src={docContainer} id="doc-container" alt="null" />}
          {img && <img src={img} id="doc" alt={docType} />}
        </label>
        <img
          src={deleteDoc}
          id="delete-doc"
          alt="delete-doc"
          onClick={deleteDocHandler}
        />
      </div>
    </Container>
  );
};

export default DocToUpload;
