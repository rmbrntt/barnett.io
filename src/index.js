import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../semantic/dist/semantic.css';
import '../semantic/dist/semantic.js';
import $ from 'jquery'


$(document)
  .ready(function() {

    // fix menu when passed
    $('.masthead')
      .visibility({
        once: false,
        onBottomPassed: function() {
          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function() {
          $('.fixed.menu').transition('fade out');
        }
      })
    ;

    // create sidebar and attach to menu open
    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item')
    ;

  })
;


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
