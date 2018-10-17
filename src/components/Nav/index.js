import React from 'react';
import {NavLink as RouterLink} from 'react-router-dom';
import styled, {css} from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid: auto-flow 1fr / 1fr 3fr;
    padding: 1rem;
`

const Home = styled(RouterLink)`
    color: #000;
    font-size: .775rem;
    font-weight: 400;
    text-decoration: none;
    opacity: 1;
    margin-right: 16px;
    padding-left: 16px;
    padding-top: 0px;
    padding-bottom: 0px;
    transition: opacity .15s ease-in;

    &:hover {
        opacity: 1;
        transition: opacity .15s ease-out;
    }

    &.active {
        opacity: 1;
        transition: opacity .15s ease-out;
    }
    
    &:focus {
        opacity: 1;
        transition: opacity .15s ease-in;
    }

    &:visited {
        transition: color .15s ease-in;
    }

    @media (min-width: 30em) {
        font-size: 1rem;
    }
`

const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-end;
	align-items: center;
    align-content: stretch;
    
    @media (max-width: 320px) {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: stretch;
        align-content: stretch;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: stretch;
        align-content: stretch;
    }
`

const NavLink = styled(RouterLink)`
    color: #000;
    font-size: .675rem;
    text-align: right;
    font-weight: bold;
    letter-spacing: .05em;
    text-decoration: none;
    text-transform: uppercase;
    opacity: 1;
    margin-right: 16px;
    padding-left: 16px;
    padding-top: 0px;
    padding-bottom: 0px;
    transition: opacity .15s ease-in;

    &:hover {
        opacity: .5;
        transition: opacity .15s ease-out;
    }

    &.active {
        opacity: .8;
        transition: opacity .15s ease-out;
    }
    
    &:focus {
        opacity: .5;
        transition: opacity .15s ease-in;
    }

    &:visited {
        transition: color .15s ease-in;
    }

    @media (min-width: 30em) {
        font-size: .900rem;
    }

    @media (min-width: 30em) {
        font-size: .900rem;
    }
`

const NavBar = () => (
    <Wrapper>
      <Home exact to="/">
        ryan barnett
      </Home>
      <Nav>
        <NavLink to="/work">work</NavLink>
        <NavLink to="/about">about</NavLink>
      </Nav>
    </Wrapper>
  );
  
  export default NavBar;