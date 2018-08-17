import React from 'react';
import styled, {keyframes} from 'styled-components';
import HeaderLink from './HeaderLink';
import logo from './logo.svg';

const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(8, 12.5%);
  grid-template-rows: 10% 90%;
  background-color: #1b1c1d;
  padding: 25px;
  color: white;
`;

const NavBar = styled.div`
  text-align: center;
  grid-row: 1 / 2;
  grid-column: 1 / 5;
`;

const Hero = styled.div`
  grid-row: 2;
  grid-column: 5 / 8;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const RotatingLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

const H1 = styled.h1`
  font-size: 1.5em;
`;

const Header = () => (
  <HeaderWrapper>
    <NavBar>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/repos">Repos</HeaderLink>
    </NavBar>
    <Hero>
      <RotatingLogo src={logo} alt="logo" />
      <H1>Welcome to React</H1>
    </Hero>
  </HeaderWrapper>
);

export default Header;
