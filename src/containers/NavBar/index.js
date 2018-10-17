import React from 'react';
import styled from 'styled-components';
import StyledNavLink from './StyledNavLink';

const Wrapper = styled.div`
  background-color: #1b1c1d;
  padding: 0px;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 1%;

  /* Medium screens */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }

  /* Small screens */
  @media (max-width: 320px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`;

const NavBar = () => (
  <Wrapper>
    <StyledNavLink lead exact to="/">
      ryan barnett
    </StyledNavLink>
    <StyledNavLink to="/projects">projects</StyledNavLink>
    <StyledNavLink to="/repos">repos</StyledNavLink>
    <StyledNavLink to="/about">about</StyledNavLink>
  </Wrapper>
);

export default NavBar;
