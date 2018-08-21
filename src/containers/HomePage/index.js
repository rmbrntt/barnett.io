import React from 'react';
import styled, {keyframes} from 'styled-components';
import logo from './logo.svg';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 2fr;
`;

const Hero = styled.div`
  background-color: #1b1c1d;
  padding: 25px;
  color: white;
  grid-row: 1;
  grid-column: 1 / 4;
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
  grid-row-start: 1;
  grid-column-start: 1;
`;

const H1 = styled.h1`
  font-size: 1.5em;
`;

const AppIntro = styled.div`
  font-size: large;
  grid-row: 2;
  grid-column-start: 2;
`;

const HomePage = () => (
  <Wrapper>
    <Hero>
      <RotatingLogo src={logo} alt="logo" />
      <H1>Landing</H1>
    </Hero>
    <AppIntro>
      <p>placeholder.</p>
    </AppIntro>
  </Wrapper>
);

export default HomePage;
