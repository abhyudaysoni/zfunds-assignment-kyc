import React from "react";
import { Container } from "./styles";
import { useDispatch } from "react-redux";
import { changeAnnualIncome } from "../../../../store/personal-slice";

const Income = () => {
  const dispatch = useDispatch();
  const incomeHandler = (e) => {
    dispatch(changeAnnualIncome(e.target.value));
  };
  return (
    <Container>
      <h4>Annual Income: </h4>
      <div className="options-container">
        <div className="option">
          <input
            type="radio"
            id="below-1-lakh"
            name="annual-income"
            value="Below 1 lakh"
            onChange={incomeHandler}
          />
          <label htmlFor="below-1-lakh">Below 1 lakh</label>
        </div>
        <div className="option">
          <input
            type="radio"
            id="1-5-lakhs"
            name="annual-income"
            value="1-5 lakhs"
            onChange={incomeHandler}
          />
          <label htmlFor="1-5-lakhs">1 - 5 lakhs</label>
        </div>
        <div className="option">
          <input
            type="radio"
            id="5-10-lakhs"
            name="annual-income"
            value="5-10 lakhs"
            onChange={incomeHandler}
          />
          <label htmlFor="5-10-lakhs">5 - 10 lakhs</label>
        </div>
        <div className="option">
          <input
            type="radio"
            id="10-20-lakhs"
            name="annual-income"
            value="10-20 lakhs"
            onChange={incomeHandler}
          />
          <label htmlFor="10-20-lakhs">10-20 lakhs</label>
        </div>
        <div className="option">
          <input
            type="radio"
            id="above-20-lakhs"
            name="annual-income"
            value="Above 20 lakhs"
            onChange={incomeHandler}
          />
          <label htmlFor="above-20-lakhs">Above 20 lakhs</label>
        </div>
      </div>
    </Container>
  );
};

export default Income;
