import React from 'react'
import styled from 'styled-components'

const Panel = styled.div`
  height: 400px;
  width: 350px;
  background: #dededd;
`;

const Main = styled.div`
  height: 216px;
  position: relative;
`;

const Description = styled.div`
  height: 184px;
  background: #ffffff;
  display: flex;
  flex-wrap: wrap;
  padding: 0 29px;
`;

const Button = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 13px;
  width: 165px;
  height: 34px;
  margin: 0;
  padding: 0;
  display: flex;
  border: 0;
  background: #1f2c3a;


  `;

const ButtonTitle = styled.div`
  width: 135px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  height: 34px;
  align-items: center;
  font-family: 'Raleway-Bold';
  text-transform: uppercase;

  ${Button}:hover & {
    background: #006db7;
  }

`;

const ButtonIcon = styled.div`
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2f3840;

  ${Button}:hover & {
    background: #037ed1;
  }
`;

const Divider = styled.div`
  width: 30px;
  background: #fdc300;
  height: 3px;
  margin-top: 32px;
`;

const PanelTitle = styled.h1`
  font-size: 18px;
  font-family: 'Raleway-ExtraBold';
  text-transform: uppercase;
`;

const PanelContent = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  color: #777777;
`;

const Box = ({ title, description, buttonText }) => (
  <Panel>
    <Main>
      <Button>
        <ButtonTitle>{buttonText}</ButtonTitle>
        <ButtonIcon>
          <img src="static/angle-right-solid.png" width="9" height="18"/>
        </ButtonIcon>
      </Button>
    </Main>
    <Description>
      <Divider />
      <PanelContent>
        <PanelTitle>{title}</PanelTitle>
        {description}
      </PanelContent>
    </Description>
  </Panel>
)

export default Box
