import React from "react";
import { useDispatch } from "react-redux";
import { changeMaritalStatus } from "../../../../store/personal-slice";
import { Container } from "./styles";

const MaritalStatus = () => {
  const dispatch = useDispatch();
  const maritalStatusHandler = (e) => {
    dispatch(changeMaritalStatus(e.target.value === "married" ? true : false));
  };
  return (
    <Container>
      <h4>Marital Status: </h4>
      <div className="options-container">
        <div className="option">
          <input
            type="radio"
            id="unmarried"
            name="marital-status"
            value="unmarried"
            onChange={maritalStatusHandler}
            checked
          />
          <label htmlFor="unmarried">Unmarried</label>
        </div>
        <div className="option">
          <input
            type="radio"
            id="married"
            name="marital-status"
            onChange={maritalStatusHandler}
            value="married"
          />
          <label htmlFor="married">Married</label>
        </div>
      </div>
    </Container>
  );
};

export default MaritalStatus;
