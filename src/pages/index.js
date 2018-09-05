import React from 'react'
import Navigation from '../components/Navigation'
import Jumbotron from '../components/Jumbotron'
import Panel from '../components/Panel'
import Header from '../components/Header'
import Box from '../components/Box'
import styled from 'styled-components'


const Divider = styled.div`
  margin-top: 164px;
  background: #fdc300;
  width: 66px;
  height: 3px;
`

const PrimaryButton = styled.button`
  width: 216px;
  height: 49px;
  background: #fdc300;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  border-radius: 24px 24px 24px 24px;
  border: 0;
  color: #ffffff;
  font-size: 13px;
  font-family: 'Raleway-Bold';
`

const Placeholder = styled.div`
  height: 335px;
  background: #1b2936;
`

const PanelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const HeroContainer = styled.div`
  height: 854px;
  background: #173044;
  border-top: 1px solid #1f3f4d;
  border-bottom: 1px solid #1f3f4d;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
`

const Wrapper = styled.div`
  width: 1140px;
  margin-left: auto;
  margin-right: auto;
`

const OfferContainer = styled.div`
padding-top: 69px;
height: 636px;
background: #ffffff;
`;

const Boxes = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 40px;
justify-content: space-between;
`;

const Home = ({ data }) => {
  const { edges: panels } = data.allContentfulHero;
  const { edges: boxes } = data.allContentfulOffer;

  return (
    <div>
      <HeroContainer>
        <Wrapper>
          <Navigation />
          <Divider />
          <Jumbotron />
          <PanelContainer>
            {panels.sort((a,b) => a.node.order-b.node.order).map(({ node }) => <Panel {...node} key={node.title} />)}
            <PrimaryButton>View Details</PrimaryButton>
          </PanelContainer>
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
