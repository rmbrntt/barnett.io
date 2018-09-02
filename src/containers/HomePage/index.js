import React from 'react';
import styled, {keyframes} from 'styled-components';
import AboutPage from 'containers/AboutPage';
import ProjectPage from 'containers/ProjectPage';
const Wrapper = styled.div``;

const H4 = styled.h4`
  color: #1d0016;
  text-transform: uppercase;
  font-size: 16px;
  display: block;
  -webkit-margin-before: 1.33em;
  -webkit-margin-after: 1.33em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  font-weight: bold;
  margin-left: 20px;
`

const AppIntro = styled.div`
  font-size: large;
`;

const HomePage = () => (
  <Wrapper>
    <ProjectPage />
    <AboutPage />
  </Wrapper>
);

export default HomePage;
