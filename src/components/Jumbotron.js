import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
padding-bottom: 150px;
margin-top: 16px;
`;

const Title = styled.h1`
color: #ffffff;
line-height: 60px;
font-size: 72px;
font-family: 'Raleway-ExtraBold';
margin: 0;
text-transform: uppercase;
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
