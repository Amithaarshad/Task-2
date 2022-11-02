import React from "react";
import styled from "styled-components";

function Right() {
  return (
    <Maincontainer>
      <Wrapper className="wrapper">
        <Topcontainer>
          <Searchcontainer>
            <Searchimg>
              <Image
                src={
                  require("../assets/images/property-1=Food-Site.svg").default
                }
              ></Image>
            </Searchimg>
            <Input placeholder="search document,keyword etc."></Input>
          </Searchcontainer>
        </Topcontainer>
        <Analytics>
          <RightAnalytics>Analytics</RightAnalytics>
          <LeftAnalytics>
            <IncomeAnalytic>Income</IncomeAnalytic>
            <SaveAnalytic>Savings</SaveAnalytic>
          </LeftAnalytics>
        </Analytics>
        <Graph>
          <Imagegraph src={require("../assets/images/graph.png")}></Imagegraph>
        </Graph>
      </Wrapper>
    </Maincontainer>
  );
}

export default Right;

const Maincontainer = styled.section`
  width: 45%;
`;
const Wrapper = styled.section``;
const Topcontainer = styled.div``;
const Searchcontainer = styled.div`
  border: 1px solid #8e8e8e;
  padding-left: 10px;
  margin: 5px;
  height: 45px;
  display: flex;
`;
const Searchimg = styled.div`
  display: inline-block;
  width: 25px;
  color: #8e8e8e;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Input = styled.input`
  width: 80%;
  margin-left: 10px;
`;
const Analytics = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const RightAnalytics = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;
const LeftAnalytics = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
`;
const IncomeAnalytic = styled.div`
  margin-right: 40px;
`;
const SaveAnalytic = styled.div``;
const Graph = styled.div`
  display: inline-block;
  height: 80%;
  width: 85%;
`;
const Imagegraph = styled.img`
  width: 100%;
  height: 100%;
`;
