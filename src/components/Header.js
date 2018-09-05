import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
font-size: 30px;
font-family: 'Raleway-Bold';
text-align: center;
`;

const Description = styled.span`
font-size: 13px;
font-family: 'Raleway-SemiBold';
text-align: center;
display: block;
color: #888888;
text-transportation: 'uppercase';
`;

const Divider = styled.div`
width: 30px;
height: 3px;
background: #fdc300;
margin-left: auto;
margin-right: auto;
`;

const Header = () => (
  <div>
    <Title>What we Offer</Title>
    <Description>tailored logistic services</Description>
    <Divider></Divider>
  </div>
)

export default Header;
