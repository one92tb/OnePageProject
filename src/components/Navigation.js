import React from 'react'
import styled from 'styled-components'

const NavBar = styled.div`
background-color: #fefefe;
    height: 81px;
    padding: 0 30px 0 23px !important;
    border-radius: 3px;
    margin-top: 43px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 43px;
`;

const Nav = styled.ul`
display: flex;
flex-wrap: wrap;
padding-left: 0;
margin: 0;
list-style: none;
align-items: center;
min-height: 100%;
&:after{
  content: '';
  position: absolute;
  border: 3px solid #006db7;
  display: block;
  width: 66px;
  bottom: 0;
}
`;

const NavItem = styled.li`
position: relative;

`;

const NavLink = styled.a`
font:size: 13px;
padding: 0 23px;
font-family: 'Raleway-Bold';
display: block;
text-decoration: none:
background-color: transparent;
text-transform: uppercase;
color: #333333;
`;

const IconBox = styled.div`
display: flex;
justify-content: center;
width: 35px;
height: 35px;
background: #006db7;
border-radius: 50%;
margin-left: 9px;
align-items: center;
`;

const Divider = styled.div`
position: absolute;
background: #006db7;
bottom: 0;
lefT: 7px;
width: 66px;
height: 3px;
`;

const Navigation = ({ data }) => (
  <NavBar>
    <img src="/static/logo.png" />
    <Nav>
      <NavItem>
        <NavLink>home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>about us</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>services</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>news</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>locations</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>contact</NavLink>
      </NavItem>
      <NavItem>
        <IconBox>
          <img src="static/search-solid.png" width="13" height="13"/>
        </IconBox>
      </NavItem>
    </Nav>
  </NavBar>
)

export default Navigation;
