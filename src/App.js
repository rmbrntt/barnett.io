import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';
import HomePage from 'containers/HomePage';
import RepoView from 'containers/RepoView';
import Header from 'components/Header';

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
`;

const App = () => (
  <AppWrapper>
    <Helmet titleTemplate="%s - React-O-Matic" defaultTitle="React-O-Matic">
      <meta
        name="description"
        content="pretty much create-react-app but with some batteries"
      />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/repos" component={RepoView} />
    </Switch>
  </AppWrapper>
);

export default App;
