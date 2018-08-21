import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';
import HomePage from 'containers/HomePage';
import RepoView from 'containers/RepoView';
import NavBar from 'containers/NavBar';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 3fr 1fr;
  grid-template-areas: 'header header' 'main main' 'footer footer';
`;

const Header = styled.div`
  grid-area: header;
`;
const Main = styled.div`
  grid-area: main;
`;
const Footer = styled.div`
  grid-area: footer;
`;

const App = () => (
  <Wrapper>
    <Helmet defaultTitle="ryan barnett">
      <meta name="description" content="ryan barnett's basecamp on the web" />
    </Helmet>
    <Header>
      <NavBar className="navbar" />
    </Header>
    <Main>
      <Switch className="main">
        <Route exact path="/" component={HomePage} />
        <Route path="/repos" component={RepoView} />
      </Switch>
    </Main>
    <Footer />
  </Wrapper>
);

export default App;
