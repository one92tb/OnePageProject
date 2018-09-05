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
`;

const Image = styled.div`
width: 164px;
display: flex;
justify-content: center;
align-items: center;
`;

const Content = styled.div`
padding-top: 34px;
width: 390px;
`
const Header = styled.h3`
font-size: 18px;
font-family: 'Raleway-Bold';
`;

const Description = styled.span`
font-family: 'Open Sans', sans-serif;
font-size: 13px;
display: block;
padding-right: 35px;
padding-left: 1px;
color: #777777;
padding-left: 1px;
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
