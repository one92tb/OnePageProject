import React from 'react'
import styled from 'styled-components'

const Title = styled.h3`
  font-size: 18px;
  font-family: 'Raleway-Bold';
`;

const Wrapper = styled.div`
  width: 555px;
  height: 185px;
  background: #fcfcfc;
  display: flex;
  margin-bottom: 30px;

@media (max-width: 1200px) {
  padding: 0 20px;
  width: 100%;
  justify-content: center;
}
`;

const Image = styled.div`
  width: 164px;
  display: flex;
  justify-content: center;
  align-items: center;

@media only screen and (max-width: 575.98px) {
  display: none;
}
`;

const Content = styled.div`
  padding-top: 34px;
  width: 390px;

@media (max-width: 575.98px) {
    width: 100%;
}
`
const Header = styled.h3`
  font-size: 18px;
  font-family: 'Raleway-Bold';

  @media (max-width: 575.98px) {
    font-size: 14px;
  }
`;

const Description = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  display: block;
  padding-right: 35px;
  padding-left: 1px;
  color: #777777;
  padding-left: 1px;

  @media only screen and (max-width: 575.98px) {
    font-size: 11px;
  }
`;

const Box = ({ title, description, fileName }) => (
  <Wrapper>
    <Image>
      <img src={`/static/${fileName}.png`} />
    </Image>
    <Content>
      <Header>{title}</Header>
      <Description>{description}</Description>
    </Content>
  </Wrapper>
)

export default Box;
