import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-bottom: 146px;
  margin-top: 181px

  @media (max-width: 575.98px) {
      font-size: 40px;
      width: 300px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 140px;
  }

`;

const Title = styled.h1`
color: #ffffff;
line-height: 60px;
font-size: 72px;
font-family: 'Raleway-ExtraBold';
margin: 0;
text-transform: uppercase;


&:before{
  content: '';
  width: 66px;
  display: block;
  border: 3px solid #fdc300;
  position: relative;
  bottom: 13px;

}

@media (max-width: 575.98px) {
    font-size: 35px;
    text-align: center;

    &:before{
      display: none;
    }
}

@media (min-width: 576px) and (max-width: 991.98px) {
  margin-left: 50px;
 }
 @media (min-width: 992px) and (max-width: 1199.98px) {
   margin-left: 50px;
 }
`;


const Jumbotron = () => (
  <Wrapper>
    <Title>
      strongest <br />
      distribution <br />
      network
    </Title>
  </Wrapper>
);

export default Jumbotron;
