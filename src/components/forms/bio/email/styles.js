import styled from "styled-components";

export const Container = styled.div`
  .options-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    button {
      cursor: pointer;
      padding: 0.5rem;
      font-weight: 600;
      background: white;
      font-size: 0.7rem;
      width: fit-content;
      border-radius: 10px;
      color: #32547c;
      margin: 0.5rem 0;
      border: 1px solid #32547c;
    }
    button:hover {
      background: #32547c;
      color: white;
    }
  }
`;
