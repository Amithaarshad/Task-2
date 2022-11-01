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
        <Statics>
          <Topcontainer>
            <Headingstatic>Statitics</Headingstatic>
            <Select>
              <Option>March 2022</Option>
              <Option>April 2022</Option>
              <Option>May 2022</Option>
              <Option>June 2022</Option>
            </Select>
          </Topcontainer>
          <Staticitem>
            <Staticlist>
              <Uparrow>
                <Upimage
                  src={
                    require("../assets/images/property-1=up-arrow.svg").default
                  }
                ></Upimage>
              </Uparrow>
              <Income>
                Total Income
                <br />
                <Amount>$235</Amount>
              </Income>
              <Rangeone>
                <Colorblue></Colorblue>
                <Backgroundimg>
                  <Graphimg
                    src={require("../assets/images/graph1.png")}
                  ></Graphimg>
                </Backgroundimg>
              </Rangeone>
              <Plus>+20%</Plus>
            </Staticlist>
            <Staticlist>
              <Uparrow>
                <Upimage
                  src={
                    require("../assets/images/property-1=up-arrow.svg").default
                  }
                ></Upimage>
              </Uparrow>
              <Income>
                Total Income
                <br />
                <Amount>$235</Amount>
              </Income>
              <Rangetwo>
                <Colorgreen></Colorgreen>
                <Backgroundimg>
                  <Graphimg
                    src={require("../assets/images/graph1.png")}
                  ></Graphimg>
                </Backgroundimg>
              </Rangetwo>
              <Plus>+8%</Plus>
            </Staticlist>
            <Staticlist>
              <Uparrow>
                <Upimage
                  src={
                    require("../assets/images/property-1=down-arrow.svg")
                      .default
                  }
                ></Upimage>
              </Uparrow>
              <Income>
                Total Income
                <br />
                <Amount>$235</Amount>
              </Income>
              <Rangethree>
                <Colorpink></Colorpink>
                <Backgroundimg>
                  <Graphimg
                    src={require("../assets/images/graph1.png")}
                  ></Graphimg>
                </Backgroundimg>
              </Rangethree>
              <Plus>-18%</Plus>
            </Staticlist>
          </Staticitem>
        </Statics>
      </Wrapper>
    </Maincontainer>
  );
}

export default Dashboard;

const Maincontainer = styled.section`
  margin-left: 10px;
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
  margin-bottom: 20px;
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
const Statics = styled.section`
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
`;
const Topcontainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Headingstatic = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const Select = styled.select`
  border: 1px solid #8e8e8e;
  border-radius: 20px;
  color: #8e8e8e;
`;
const Option = styled.option``;
const Staticitem = styled.div``;
const Staticlist = styled.div`
  display: flex;
  margin-top: 20px;
`;
const Uparrow = styled.div``;
const Upimage = styled.img`
  background-color: #000;
  padding: 10px;
  border-radius: 6px;
`;
const Income = styled.div`
  font-size: 10px;
  margin-left: 20px;
`;
const Amount = styled.span`
  font-size: 25px;
  font-weight: 600;
`;
const Rangeone = styled.div`
  display: flex;
  margin-left: 15px;
  height: 35px;
`;
const Rangetwo = styled.div`
  display: flex;
  margin-left: 15px;
  height: 35px;
`;
const Rangethree = styled.div`
  display: flex;
  margin-left: 15px;
  height: 35px;
`;
const Colorblue = styled.div`
  width: 54%;
  background-color: #98bee5;
`;
const Backgroundimg = styled.div`
  width: 46%;
  display: inline-block;
`;
const Graphimg = styled.img`
  width: 100%;
  height: 100%;
`;
const Plus = styled.div`
  margin-left: 15px;
`;
const Colorgreen = styled.div`
  width: 27%;
  background-color: #98dbe4;
`;
const Colorpink = styled.div`
  width: 43%;
  background-color: #fec0a7;
`;
