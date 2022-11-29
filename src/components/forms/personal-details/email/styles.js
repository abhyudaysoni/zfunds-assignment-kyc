import styled from "styled-components";

export const Container = styled.div`
  label {
    font-weight: 700;
  }
  .custom-input {
    display: flex;
    box-shadow: 0 0 5px #c2c2c2;
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
    min-height: 50px;
    padding: 0;
    overflow: hidden;
    max-width: 500px;
    margin: 0.3rem 0;
    input {
      min-height: 50px;
      border: none;
      padding: 0.5rem;
      font-weight: 600;
      width: 100%;
    }
    p {
      padding: 0 1rem;
    }
  }

  .options-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 500px;
    button {
      padding: 0.5rem;
      font-weight: 600;
      background: white;
      font-size: 0.7rem;
      width: fit-content;
      border-radius: 10px;
      color: #32547c;
      margin: 0.5rem 0.5rem;
      border: 1px solid #32547c;
    }
    button:hover {
      background: #32547c;
      color: white;
    }
    .active {
      background: #32547c;
      color: white;
    }
  }
`;
