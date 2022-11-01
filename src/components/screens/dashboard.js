import React from "react";
import styled from "styled-components";

function Dashboard() {
  return (
    <Maincontainer>
      <Wrapper className="wrapper">
        <Container>
          <Head>Dashboard</Head>
          <Items>
            <Item>
              <Itemtitle>Available Amount</Itemtitle>
              <Itemamount>$6,550</Itemamount>
            </Item>
            <Item>
              <Itemtitle>Card balance</Itemtitle>
              <Itemamount>$4,208</Itemamount>
            </Item>
            <Item>
              <Itemtitle>Credit Limit</Itemtitle>
              <Itemamount>$20,000</Itemamount>
            </Item>
          </Items>
        </Container>
        <Subcontainer>
          <Main>
            <Title>Savings</Title>
            <Left>Total 5 wallets</Left>
          </Main>
          <Itemlist>
            <Itemtype style={{ backgroundColor: "#fec0a7" }}>
              <Itemhead>
                <Img
                  src={require("../assets/images/property-1=sun 1.svg").default}
                ></Img>
              </Itemhead>
              <Itemnum>$2250</Itemnum>
              <Itemname>Summer Trip</Itemname>
            </Itemtype>
            <Itemtype style={{ backgroundColor: "#98bee5" }}>
              <Itemhead>
                <Img
                  src={require("../assets/images/property-1=fire.svg").default}
                ></Img>
              </Itemhead>
              <Itemnum>$2250</Itemnum>
              <Itemname>Summer Trip</Itemname>
            </Itemtype>
            <Itemtype style={{ backgroundColor: "#98dbe4" }}>
              <Itemhead>
                <Img
                  src={
                    require("../assets/images/property-1=console.svg").default
                  }
                ></Img>
              </Itemhead>
              <Itemnum>$2250</Itemnum>
              <Itemname>Summer Trip</Itemname>
            </Itemtype>
          </Itemlist>
        </Subcontainer>
      </Wrapper>
    </Maincontainer>
  );
}

export default Dashboard;

const Maincontainer = styled.section`
  margin-left: 30px;
  width: 35%;
`;

const Wrapper = styled.div``;
const Container = styled.div`
  margin-bottom: 20px;
`;
const Head = styled.h1`
  font-size: 30px;
  margin-left: 15px;
  padding-top: 20px;
  font-weight: bold;
`;
const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  background-color: #000;
  color: #fff;
  padding: 20px 20px 20px 20px;
  border-radius: 8px;
`;
const Item = styled.li`
  margin-left: 20px;
`;
const Itemtitle = styled.li`
  font-size: 12px;
`;
const Itemamount = styled.div`
  font-size: 25px;
  padding-top: 10px;
`;
const Subcontainer = styled.section`
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
`;
const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.h3`
  font-size: 13px;
  text-decoration: underline;
  color: #8e8e8e;
`;
const Itemlist = styled.ul`
  display: flex;
  padding-top: 20px;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-right: 10px;
  /* width: 80%; */
`;
const Itemtype = styled.li`
  border-radius: 10px;
  padding: 20px 40px 20px 40px;
  padding-left: 16px;
`;
const Itemhead = styled.div``;
const Img = styled.img``;
const Itemnum = styled.div`
  font-size: 25px;
  padding-top: 10px;
  font-weight: bold;
`;
const Itemname = styled.div`
  font-size: 12px;
  font-weight: 600;
`;
