import React from "react";
import styled from "styled-components";
import Dashboard from "./components/screens/Dashboard";
import Right from "./components/screens/Right";
import "./App.css";
import Wallet from "./components/screens/Wallet";
import CardsNotWorking from "./components/PathFolder/CardsNotWorking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Container>
        <Router>
          <Routes>
            <Route path={"/"} element={[<Wallet />,<Dashboard />,<Right />]} />
            <Route path={"/mycard"} element={[<Wallet /> ,<CardsNotWorking/> ,<Right />]} />
          </Routes>
        </Router> 
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  width: 100%;

  @media all and (max-width: 640px) {
    flex-wrap: wrap;
  }
`;
