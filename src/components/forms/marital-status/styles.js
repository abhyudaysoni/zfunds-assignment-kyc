import styled from "styled-components";

export const Container = styled.div`
  .options-container {
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    label {
      margin: 0.5rem;
      cursor: pointer;
    }
    input {
      cursor: pointer;
    }
  }
`;
