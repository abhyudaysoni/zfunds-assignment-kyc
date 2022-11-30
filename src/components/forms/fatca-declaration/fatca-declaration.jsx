import React from "react";
import { Container } from "./styles";
import toggleOn from "../../../assets/toggle-on.svg";
import toggleOff from "../../../assets/toggle-off.svg";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  resetFatca,
  setIndianCitizen,
  setIndianTaxResident,
  setNotPoliticallyExposed,
} from "../../../store/fatca-slice";
import FormActions from "../form-actions/form-actions";

const FATCADeclarationForm = () => {
  const fatca = useSelector((state) => state.fatca);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const citizenHandler = () => {
    dispatch(setIndianCitizen(!fatca.indianCitizen));
  };
  const citizenTaxHandler = () => {
    dispatch(setIndianTaxResident(!fatca.indianTaxResident));
  };
  const politicallyExposedHandler = () => {
    dispatch(setNotPoliticallyExposed(!fatca.notPoliticallyExposed));
  };
  const nextHandler = () => {
    navigate("/confirm-details");
  };
  const skipHandler = () => {
    resetFatca();
    navigate("/confirm-details");
  };
  return (
    <Container>
      <h4>Please verify that you are an:</h4>
      <div className="declaration-items">
        <div className="item">
          <p>Indian Citizen: </p>
          <img
            src={fatca.indianCitizen ? toggleOn : toggleOff}
            alt={fatca.indianCitizen ? "toggleOn" : "toggleOff"}
            onClick={citizenHandler}
          />
        </div>
        <div className="item">
          <p>Indian tax resident: </p>
          <img
            src={fatca.indianTaxResident ? toggleOn : toggleOff}
            alt={fatca.indianCitizen ? "toggleOn" : "toggleOff"}
            onClick={citizenTaxHandler}
          />
        </div>
        <div className="item">
          <p>Not politically exposed: </p>
          <img
            src={fatca.notPoliticallyExposed ? toggleOn : toggleOff}
            alt={fatca.indianCitizen ? "toggleOn" : "toggleOff"}
            onClick={politicallyExposedHandler}
          />
        </div>
      </div>
      <FormActions
        onNext={nextHandler}
        onSkip={skipHandler}
        heading="Entered details will be lost"
        description="Are you sure?"
      />
    </Container>
  );
};

export default FATCADeclarationForm;
