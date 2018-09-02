import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';
import HomePage from 'containers/HomePage';
import AboutPage from 'containers/AboutPage';

import RepoView from 'containers/RepoView';
//import NavBar from 'containers/NavBar';
import NavBar from 'components/Nav';
import SocialNav from 'components/SocialNav';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 'header header' 'main main' 'footer footer';
  height: 100vh;
`;

const Header = styled.header`
  grid-area: header;
`;
const Main = styled.main`
  grid-area: main;
`;
const Footer = styled.footer`
  grid-area: footer;
`;

const App = () => (
  <Wrapper>
    <Helmet defaultTitle="ryan barnett">
      <meta name="description" content="ryan barnett's basecamp on the web" />
    </Helmet>
    <Header>
      <NavBar />
    </Header>
    <Main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/repos" component={RepoView} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Main>
    <Footer>
      <SocialNav />
    </Footer>
  </Wrapper>
);

export default App;
