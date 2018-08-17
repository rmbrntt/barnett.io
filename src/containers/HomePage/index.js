import React from 'react';
import styled from 'styled-components';

const AppIntro = styled.div`
  font-size: large;
  grid-column-start: 2;
  grid-column-end: 3;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 100%;
`;

const HomePage = () => (
  <Wrapper>
    <AppIntro>
      <p>
        To get started, edit <code> src / App.js </code> and save to reload.
      </p>
    </AppIntro>
  </Wrapper>
);

export default HomePage;
