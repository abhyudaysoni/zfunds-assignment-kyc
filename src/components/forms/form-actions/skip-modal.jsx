import React from "react";

import styled from "styled-components";
import Button from "../../UI/button";

export const Container = styled.div`
  width: 80%;
  position: absolute;
  max-width: 500px;
  z-index: 100;
  top: 40vh;
  right: 10%;
  left: 10%;
  margin: auto;
  text-align: center;
  background: white;
  border-radius: 20px;
  padding: 1rem;
  .modal-actions {
    display: flex;
    justify-content: space-evenly;
    button {
      margin: 1rem;
      border-radius: 5px;
    }
    #yes {
      max-width: 100px;
      width: 100%;
    }
    #goBack {
      background: white;
      color: gray;
      padding: 0;
    }
  }
`;

const SkipModal = ({ onYes, onCloseModal, heading, description }) => {
  const yesHandler = () => {
    onYes();
    onCloseModal();
  };
  const goBackHandler = () => {
    onCloseModal();
  };
  return (
    <Container>
      <h4>{heading}</h4>
      <p>{description}</p>
      <div className="modal-actions">
        <Button id="goBack" onClick={goBackHandler}>
          go back
        </Button>
        <Button id="yes" onClick={yesHandler}>
          yes
        </Button>
      </div>
    </Container>
  );
};

export default SkipModal;
