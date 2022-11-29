import React from "react";
import { Container } from "./styles";
import docContainer from "../../../../assets/doc-container.svg";
import deleteDoc from "../../../../assets/delete-doc.svg";

const DocToUpload = ({ heading, description }) => {
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
        <input type="file" id="doc-input" accept=".jpg, .pdf, .png" />
        <label htmlFor="doc-input">
          <img src={docContainer} id="upload-doc" alt="" />
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
