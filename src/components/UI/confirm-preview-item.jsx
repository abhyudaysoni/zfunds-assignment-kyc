import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5rem 1rem;
  .heading {
    font-size: 0.8rem;
    color: gray;
  }
  .value {
    font-weight: 500;
  }
`;

const ConfirmPreviewItem = ({ heading, value }) => {
  return (
    <Container>
      <p className="heading">{heading || "Not Available"}</p>
      <p className="value">{value}</p>
    </Container>
  );
};

export default ConfirmPreviewItem;
