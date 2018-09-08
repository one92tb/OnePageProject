import React from 'react'
import Navigation from '../components/Navigation'
import Jumbotron from '../components/Jumbotron'
import Panel from '../components/Panel'
import Header from '../components/Header'
import Box from '../components/Box'
import styled from 'styled-components'


const PrimaryButton = styled.button`
  width: 216px;
  height: 49px;
  background: #fdc300;
  border-radius: 24px 24px 24px 24px;
  border: 0;
  color: #ffffff;
  font-size: 13px;
  font-family: 'Raleway-Bold';
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 575.98px) {
      display: block;
      width: 160px;
      font-size: 11px;
  }
`

const Placeholder = styled.div`
  height: 335px;
  background: #1b2936;

  @media (max-width: 1200px) {
      display: none;
  }
`

const PanelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1200px) {
      justify-content: space-around;
  }

`

const HeroContainer = styled.div`
  height: 854px;
  background: #173044;
  border-top: 1px solid #1f3f4d;
  border-bottom: 1px solid #1f3f4d;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-top: 43px;

  @media (max-width: 991.98px) {
    margin: 0;
    width: 100%;
    height: 100%;
    padding-top: 0px;
    border-top: 0px;
 }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    height: 100%;
  }
`

const Wrapper = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  display: block;

  @media (max-width: 575.98px) {
    margin: 0;
    width: 100%;
  }
`

const OfferContainer = styled.div`
  padding-top: 69px;
  margin-bottom: 90px;
  background: #ffffff;

@media (max-width: 575.98px) {
  margin-bottom: 40px;
}
`;

const Boxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 52px;
  justify-content: space-between;
`;

const CenterButton = styled.div`
  display: flex;
  margin-top: 50px;

  @media (max-width: 1200px) {
    margin: 35px 0 40px 0
  }

  @media (max-width: 575.98px) {
    margin: 10px 0 30px 0;
  }

`;

const Home = ({ data }) => {
  const { edges: panels } = data.allContentfulHero;
  const { edges: boxes } = data.allContentfulOffer;

  return (
    <div>
      <HeroContainer>
        <Wrapper>
          <Navigation />
          <Jumbotron />
          <PanelContainer>
            {panels.sort((a,b) => a.node.order-b.node.order).map(({ node }) => <Panel {...node} key={node.title} />)}
          </PanelContainer>
          <CenterButton>
            <PrimaryButton>View Details</PrimaryButton>
          </CenterButton>
        </Wrapper>
      </HeroContainer>
      <Placeholder />
      <OfferContainer>
        <Wrapper>
          <Header />
          <Boxes>
            {boxes.sort((a,b) => a.node.order-b.node.order).map(({ node }) => <Box {...node} key={node.title} /> )}
          </Boxes>
        </Wrapper>
      </OfferContainer>
    </div>
  )
}

export default Home;

export const query = graphql`
  query allContentfulHeroAndOffer {
    allContentfulHero {
      edges {
        node {
          title
          description
          buttonText
          order
        }
      }
    }
    allContentfulOffer {
      edges {
        node {
          title
          description
          fileName
          order
        }
      }
    }
  }
`
