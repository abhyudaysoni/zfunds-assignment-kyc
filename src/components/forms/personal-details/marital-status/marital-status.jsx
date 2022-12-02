import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../../../api/api";
import { changeMaritalStatus } from "../../../../store/personal-slice";
import { Container } from "./styles";

const MaritalStatus = () => {
  const married = useSelector((state) => state.personal.married);
  const dispatch = useDispatch();
  const maritalStatusHandler = (e) => {
    console.log(e.target.value);
    dispatch(changeMaritalStatus(e.target.value === "married" ? true : false));
    updateData();
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
            checked={!married}
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
            checked={married}
          />
          <label htmlFor="married">Married</label>
        </div>
      </div>
    </Container>
  );
};

export default MaritalStatus;
