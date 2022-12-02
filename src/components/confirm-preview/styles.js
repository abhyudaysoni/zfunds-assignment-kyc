import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  .terms-conditions {
    padding: 0 1rem;
    input {
      cursor: pointer;
      margin: 1rem 0;
    }
    label {
      cursor: pointer;
      font-size: 0.8rem;
      padding: 0 1rem;
    }
  }
  .confirm-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      margin: 1rem 0;
    }
    #submit {
      background: #03a87c;
      width: 100%;
      margin: 2rem 0;
      border-radius: 10px;
      font-size: 1rem;
    }
    #cancel {
      background: none;
      color: red;
      width: fit-content;
      margin: 0;
      padding: 0;
    }
  }
`;
