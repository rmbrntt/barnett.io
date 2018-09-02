import React from 'react';
import styled, {keyframes} from 'styled-components';
import Hero from 'components/Hero';
import AboutPage from 'containers/AboutPage';

const Wrapper = styled.div``;

const AppIntro = styled.div`
  font-size: large;
`;

const HomePage = () => (
  <Wrapper>
    <Hero />
    <AboutPage />
  </Wrapper>
);

export default HomePage;
