import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  font-size: 30px;
  font-family: 'Raleway-Bold';
  text-align: center;
  margin: 0;

  @media only screen and (max-width: 575.98px) {
    font-size: 24px;
  }
`;

const Description = styled.span`
  font-size: 13px;
  font-family: 'Raleway-SemiBold';
  text-align: center;
  display: block;
  color: #888888;
  text-transform: uppercase;
  margin: 11px 0 12px 0;

  &:after{
    content: '';
    border: 1.5px solid #fdc300;
    display: block;
    position: relative;
    width: 30px;
    margin-left: auto;
    margin-right: auto;
    top: 10px;
  }

  @media only screen and (max-width: 575.98px) {
    font-size: 11px;
  }
`;

const Header = () => (
  <div>
    <Title>What we Offer</Title>
    <Description>tailored logistic services</Description>
  </div>
)

export default Header;
