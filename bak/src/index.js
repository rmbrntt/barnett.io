import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './components/Main';
import './index.css';
import '../semantic/dist/semantic.css';
import '../semantic/dist/semantic.js';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';


ReactDOM.render(
  <App />, document.getElementById('root')
);
