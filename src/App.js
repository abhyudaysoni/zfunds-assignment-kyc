import React from "react";
// import { useSelector } from "react-redux";
import styled from "styled-components";
import AppRoutes from "./AppRoutes";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
// import { sampleUser } from "./constants/sampleData";
import { useGetData } from "./api/api";
// import { addData } from "./api/api";

export const Container = styled.div`
  main {
    max-width: 1000px;
    margin: auto;
    .btn-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50vh;
    }
  }
`;

function App() {
  // const store = useSelector((state) => state);
  // console.log(store);
  // addData(sampleUser);
  useGetData();
  return (
    <Container>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </Container>
  );
}

export default App;
