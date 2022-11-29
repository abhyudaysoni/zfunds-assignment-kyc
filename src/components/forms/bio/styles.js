import styled from "styled-components";

export const Container = styled.div`
  .bio-item {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    label {
      font-weight: 700;
    }
    input {
      min-height: 50px;
      margin: 0.3rem 0;
      border: none;
      box-shadow: 0 0 5px #c2c2c2;
      border-radius: 10px;
      padding: 0.5rem;
      font-weight: 600;
    }
  }
`;
