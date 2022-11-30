import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container } from "./styles";
import Button from "../../UI/button";
import SkipModal from "../../forms/form-actions/skip-modal";
import Backdrop from "../../UI/backdrop";

const FormActions = ({ onNext, onSkip, heading, description }) => {
  const [skipModal, setSkipModal] = useState();
  const nextHandler = () => {
    onNext();
  };
  const skipHandler = () => {
    setSkipModal(true);
  };
  const closeModalHandler = () => {
    setSkipModal(false);
  };

  document.body.scrollTop = document.documentElement.scrollTop = 0;
  document.body.style.overflow = skipModal ? "hidden" : "scroll";

  return (
    <Container>
      <Button className="next" onClick={nextHandler}>
        Next
      </Button>
      <Button className="skip" onClick={skipHandler}>
        skip for now
      </Button>
      {skipModal &&
        ReactDOM.createPortal(
          <SkipModal
            onYes={onSkip}
            onCloseModal={closeModalHandler}
            heading={heading}
            description={description}
          />,
          document.getElementById("overlay-root")
        )}
      {skipModal &&
        ReactDOM.createPortal(
          <Backdrop onClick={closeModalHandler} />,
          document.getElementById("backdrop-root")
        )}
    </Container>
  );
};

export default FormActions;
