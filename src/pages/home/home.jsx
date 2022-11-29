import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/UI/button";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 70vh;
  button {
    cursor: pointer;
    font-size: 1.5rem;
    color: #f1e2e2;
    width: 100%;
    max-width: 300px;
    border-radius: 5px;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const completeKYCHandler = () => {
    navigate("/personal-details");
  };
  return (
    <Container>
      <Button onClick={completeKYCHandler}>Complete KYC</Button>
    </Container>
  );
};

export default Home;
