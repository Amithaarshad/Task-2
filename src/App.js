import React from 'react'
import styled from 'styled-components'
import Dashboard from './components/screens/Dashboard'
import Right from './components/screens/Right'
import Wallet from './components/screens/Wallet'
import "./App.css" 
function App() {
  return (
    <>
      <Container>
        <Wallet/>
        <Dashboard/>
        <Right/>
      </Container>
    </>
  )
}

export default App


const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
