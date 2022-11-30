import React, { useState } from "react";
import { Container } from "./styles";
import docContainer from "../../../../assets/doc-container.svg";
import deleteDoc from "../../../../assets/delete-doc.svg";

const DocToUpload = ({ heading, description, docs }) => {
  const [doc, setDoc] = useState(docs);
  const uploadDocHandler = (e) => {
    setDoc(e.target.value);
    console.log(e.target.value);
  };
  const deleteDocHandler = () => {
    console.log("del");
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
          id="doc-input"
          onChange={uploadDocHandler}
          accept=".jpg, .pdf, .png"
          value={doc}
        />
        <label htmlFor="doc-input">
          {!doc && <img src={docContainer} id="upload-doc" alt="" />}
          {doc && <img src={doc} id="upload-doc" alt="" />}
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
