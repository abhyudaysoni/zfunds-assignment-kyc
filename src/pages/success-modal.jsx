import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Backdrop from "../components/UI/backdrop";
import Modal from "../components/UI/modal";
import { useNavigate } from "react-router-dom";

export const Container = styled.div``;

const SuccessModal = ({ heading, description }) => {
  const navigate = useNavigate();
  const okayHandler = () => {
    navigate("/");
  };
  return (
    <Container>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          heading="Success"
          description="data updated successfully"
          onOkay={okayHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </Container>
  );
};

export default SuccessModal;
