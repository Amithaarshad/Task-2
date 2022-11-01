import React from 'react'
import styled from 'styled-components'

function Right() {
  return (
    <Maincontainer>
      <Wrapper className= "wrapper">
        <Topcontainer>
          <Searchcontainer>
            <Searchimg>
              <Image src={require("../assets/images/property-1=Food-Site.svg").default}></Image>
            </Searchimg>  
            <Input></Input>
          </Searchcontainer>       
        </Topcontainer>
      </Wrapper>
    </Maincontainer>
  )
}

export default Right

const Maincontainer = styled.section``;
const Wrapper = styled.section``;
const Topcontainer = styled.div``;
const Searchcontainer = styled.div``;
const Searchimg = styled.div``;
const Image = styled.img``;
const Input = styled.input``;