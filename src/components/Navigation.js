import React from 'react'
import styled from 'styled-components'
import Fragment from 'react';

const NavBar = styled.div`
  background-color: #fefefe;
  height: 81px;
  border-radius: 3px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 992px) {
    border-radius: 0px;
  }
`;

const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin: 0;
  list-style: none;
  align-items: center;
  min-height: 100%;

@media only screen and (max-width: 992px) {
  display: none;
  width: 100%;
  text-align: center;
  z-index: 1;
}
`;

const NavItem = styled.li`

&:first-child:after{
  content: '';
  position: absolute;
  border: 3px solid #006db7;
  display: block;
  width: 66px;
  bottom: 0;
}

@media only screen and (max-width: 992px) {
  &:first-child:after{
    display: none;
  }
}
`;

const NavLink = styled.a`
  font-size: 13px;
  padding: 0 23px;
  font-family: 'Raleway-Bold';
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  color: #333333;

@media only screen and (max-width: 992px) {
  font-size: 16px;
  padding: 15px 0;
  border-top: 1px solid #000;

  &:hover{
    background: #eff3f9;
  }
}
`;

const Logo = styled.div`
  margin-left: 30px;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  width: 35px;
  height: 35px;
  background: #006db7;
  border-radius: 50%;
  align-items: center;
  margin: 0 23px 0 9px;

  @media only screen and (max-width: 992px){
    display: none;
  }
`;

const Label = styled.label`
  display: none;

  @media only screen and (max-width: 992px){
    display: block;
    cursor: pointer;
    font-size: 30px;
    height: 31px;
    padding: 25px 0;
    margin-right: 23px;
  }
`;
const Input = styled.input`
display: none;

@media only screen and (max-width: 992px){
  &:checked + ${Nav} {
    display: block;
    background: #fefefe;
  }
}
`

const Hamburger = () => (
  <Fragment>
    <Label htmlFor="toggle">&#9776;</Label>
    <Input type="checkbox" id="toggle" />
  </Fragment>
);


const Navigation = ({ data }) => (
  <NavBar>
    <Logo>
      <img src="/static/logo.png" />
    </Logo>
    <Label htmlFor="toggle">&#9776;</Label>
    <Input type="checkbox" id="toggle" />
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
