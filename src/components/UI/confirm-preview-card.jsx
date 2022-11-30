import React from "react";
import styled from "styled-components";
import ConfirmPreviewItem from "./confirm-preview-item";
import edit from "../../assets/edit.svg";

export const Container = styled.div`
  border: 1px solid #052f5f;
  border-radius: 10px;
  margin: 1.5rem 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h4 {
    padding: 1rem;
  }
  .footnotes-container {
    background-color: #ebf2fa;
    margin: 1rem 0 0 0;
    p {
      padding: 1rem 1.5rem;
      font-size: 0.8rem;
    }
    p::before {
      content: "Note: ";
      font-weight: 600;
    }
  }
  img {
    cursor: pointer;
    max-height: 30px;
    margin: 0 1rem;
  }
`;

const ConfirmPreviewCard = ({
  heading,
  footnotes,
  content,
  editable,
  editRoute,
  onEdit,
}) => {
  return (
    <Container>
      <div className="heading">
        <h4>{heading}</h4>
        {editable && (
          <img src={edit} onClick={onEdit.bind(null, editRoute)} alt="edit" />
        )}
      </div>
      {content.map((item, index) => (
        <ConfirmPreviewItem
          key={index}
          heading={item[0]}
          value={item[1]}
        ></ConfirmPreviewItem>
      ))}
      {footnotes && (
        <div className="footnotes-container">
          <p>{footnotes}</p>
        </div>
      )}
    </Container>
  );
};

export default ConfirmPreviewCard;
