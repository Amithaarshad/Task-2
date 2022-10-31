import React from "react";
import styled from "styled-components";

function Wallet() {
  return (
    <Maincontainer>
      <Wrapper className="wrapper">
        <Imagecontainer>
          <Logoimg src={require("../assets/images/logo-wallet.png")} />
        </Imagecontainer>
        <Lists>
          <Items>
            <Itemlogo>
              <Img
                src={require("../assets/images/property-1=menu.svg").default}
              ></Img>
            </Itemlogo>
            <Itemtype>
              <Itemtitle>Dashboard</Itemtitle>
            </Itemtype>
          </Items>
          <Items>
            <Itemlogo>
              <Img
                src={
                  require("../assets/images/property-1=credit-card.svg").default
                }
              ></Img>
            </Itemlogo>
            <Itemtype>
              <Itemtitle>My Cards</Itemtitle>
            </Itemtype>
          </Items>
          <Items>
            <Itemlogo>
              <Img
                src={require("../assets/images/property-1=lock.svg").default}
              ></Img>
            </Itemlogo>
            <Itemtype>
              <Itemtitle>Savings</Itemtitle>
            </Itemtype>
          </Items>
          <Items>
            <Itemlogo>
              <Img
                src={
                  require("../assets/images/property-1=transaction.svg").default
                }
              ></Img>
            </Itemlogo>
            <Itemtype>
              <Itemtitle>Transaction</Itemtitle>
            </Itemtype>
          </Items>
          <Items>
            <Itemlogo>
              <Img
                src={require("../assets/images/property-1=gear.svg").default}
              ></Img>
            </Itemlogo>
            <Itemtype>
              <Itemtitle>Settings</Itemtitle>
            </Itemtype>
          </Items>
        </Lists>
      </Wrapper>
      <BottomItems>
        <Itemlogo>
          <Img src={require("../assets/images/rectangle.jpg")}></Img>
        </Itemlogo>
        <Itemtype>
          <Itemtitle>
            Jennifer <br /> Connectify
          </Itemtitle>
        </Itemtype>
        <Dot>
          <Img
            src={require("../assets/images/property-1=dot.svg").default}
          ></Img>
        </Dot>
      </BottomItems>
    </Maincontainer>
  );
}

export default Wallet;

const Maincontainer = styled.section`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Wrapper = styled.div``;
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
  padding-top: 20px;
  margin-left: 25px;
`;
const Itemlogo = styled.div``;
const Img = styled.img`
  width: 70%;
`;
const Itemtype = styled.div``;
const Itemtitle = styled.h3`
  margin-left: 10px;
  font-size: 15px;
`;
const Dot = styled.div`
  width: 100%;
  margin-left: 25%;
`;
const BottomItems = styled.div`
  display: flex;
  margin-bottom: 30px;
  margin-left: 30px;
`;
