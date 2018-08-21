import React from 'react';
import styled from 'styled-components';
import HeaderLink from './HeaderLink';

const NavBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-column-gap: 2.5%;
  background-color: #1b1c1d;
  padding: 10px;
  color: white;
`;

/**
 * TODO:
 * this is the perfect setup for squished viewpoint width
 * const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100%;
  grid-column-gap: 10%;
  background-color: #1b1c1d;
  padding: 25px;
  color: white;
`;

const NavBar = styled.div`
  grid-row: 1;
  grid-column: 1;
`;

 */

const Header = () => (
  <NavBar>
    <HeaderLink lead exact to="/">
      ryan barnett
    </HeaderLink>
    <HeaderLink to="/projects">projects</HeaderLink>
    <HeaderLink to="/repos">repos</HeaderLink>
    <HeaderLink to="/about">about</HeaderLink>
  </NavBar>
);

export default Header;
