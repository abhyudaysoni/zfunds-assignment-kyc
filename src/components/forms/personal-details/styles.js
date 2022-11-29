import styled from "styled-components";

export const Container = styled.form`
  padding: 1rem;
  .form-item {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
  }
  input {
    max-width: 500px;
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    .next {
      border-radius: 10px;
      width: 100%;
      margin: 1rem 0;
      max-width: 300px;
    }
    .skip {
      background: white;
      color: #052f5f;
      text-decoration: underline;
      width: 100%;
      margin: 0;
      padding: 0;
      max-width: 300px;
    }
  }
`;
