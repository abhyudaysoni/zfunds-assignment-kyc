import React from "react";
import styled from "styled-components";
import idSlice from "../../store/id-slice";

export const Container = styled.div`
  padding: 0.5rem 1rem;
  display: ${(props) => (props.isImage ? "flex" : "")};
  justify-content: ${(props) => (props.isImage ? "space-between" : "")};
  align-items: ${(props) => (props.isImage ? "center" : "")};
  .heading {
    font-size: 0.8rem;
    color: gray;
  }
  .value {
    font-weight: 500;
  }
  .value-container {
    min-height: 50px;
    img {
      min-height: 50px;
    }
  }
`;

const ConfirmPreviewItem = ({ heading, value }) => {
  const isString = typeof value === "string";
  let isImage = null;
  if (isString) {
    if (value.includes("https://")) {
      isImage = true;
    }
  }
  const isBoolean = typeof value === "boolean" ? true : false;

  return (
    <Container isImage={isImage}>
      <p className="heading">{heading || "Not Available"}</p>
      {isBoolean && <p className="value">{value ? "Yes" : "No"}</p>}
      {!isImage && <p className="value">{value}</p>}
      {isImage && (
        <div className="value-container">
          {isImage && <img src={value} alt={value} />}
        </div>
      )}
    </Container>
  );
};

export default ConfirmPreviewItem;
