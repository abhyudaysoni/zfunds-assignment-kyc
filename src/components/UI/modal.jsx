import React from "react";
import styled from "styled-components";
import Button from "./button";

export const Container = styled.div`
  position: absolute;
  z-index: 500;
  background: white;
  max-width: 500px;
  max-height: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin: auto;
  padding: 5rem;
  justify-content: space-evenly;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  button {
    max-width: 200px;
    width: 100%;
    border-radius: 5px;
  }
`;

const Modal = ({ heading, description, onOkay }) => {
  return (
    <Container>
      <h4>{heading}</h4>
      <p>{description}</p>
      <Button onClick={onOkay}>Okay</Button>
    </Container>
  );
};

export default Modal;
