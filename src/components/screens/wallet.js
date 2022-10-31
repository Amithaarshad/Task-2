import React from 'react'
import styled from 'styled-components'

function Wallet() {
  return (
      <Maincontainer>
        <Wrapper className="wrapper">
          <Imagecontainer>
            <Logoimg src={require("../assets/images/logo-wallet.png")}></Logoimg>
          </Imagecontainer>
          <Lists>
            <Items>
              <Itemlogo>
                <Img src={require("../assets/images/property-1=menu.svg").default}></Img>
              </Itemlogo>
              <Itemtype>
                <Itemtitle>Dashboard</Itemtitle>
              </Itemtype>
            </Items>
            </Lists>
         </Wrapper>   
      </Maincontainer>
  )
}

export default Wallet


const Maincontainer = styled.section`
  width: 30%;
`;
const Wrapper = styled.div`

`;
const Imagecontainer = styled.h1`
  display: inline-block;
  width: 180px;
`;
const Logoimg = styled.img`
  width: 100%;
  height: 100%;
`;
const Lists = styled.ul``;
const Items = styled.li`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;
const Itemlogo = styled.div``;
const Img = styled.img``;
const Itemtype = styled.div``;
const Itemtitle = styled.h3``;
