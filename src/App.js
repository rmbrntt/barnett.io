import React, { Component } from 'react';
import './App.css';
import MenuPointing from './components/MenuPointing'
import MenuFixed from './components/MenuFixed'
import MenuSidebar from './components/MenuSidebar'
import Card from './components/Card'
import PlaceholderImage from "../images/placeholder_image.png";

class App extends Component {
  render() {
    return (
<div>
<MenuFixed />
<MenuSidebar />
    <div className='ui inverted vertical masthead center aligned segment'>
      <div className='ui container'>
        <MenuPointing />

      </div>
      <div className="ui middle aligned stackable grid container">
        <div className="row">
          <div className="six wide column">
            <Card />
          </div>
          <div className="ten wide left floated column">
            <h1 className='ui header inverted'>Software Development and Process Engineering</h1>
            <h2>Building applications that streamline workflows and help teams get the most out of their work.</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="ui vertical stripe segment">
    <div className="ui middle aligned stackable grid container">
      <div className="row">
        <div className="eight wide column">
          <h3 className="ui header">Project Placeholder 1</h3>
          <p>Doner short ribs chicken, shank ham hock pork meatball frankfurter meatloaf. Chuck porchetta kevin bacon hamburger turkey.</p>
          <h3 className="ui header">Project Placeholder 2</h3>
          <p>Ribeye hamburger porchetta pork leberkas strip steak tail alcatra. Short loin rump cow shank ham bacon, meatloaf beef landjaeger shoulder porchetta frankfurter pastrami alcatra. </p>
        </div>
        <div className="six wide right floated column">
          <img src={PlaceholderImage} className="ui large bordered rounded image"/>
        </div>
      </div>
      <div className="row">
        <div className="center aligned column">
          <a className="ui huge button">Check Them Out</a>
        </div>
      </div>
    </div>
  </div>
  <div className="ui vertical stripe quote segment">
    <div className="ui equal width stackable internally celled grid">
      <div className="center aligned row">
        <div className="column">
          <h3>Twitter Feed 1</h3>
          <p>#hashtag?</p>
        </div>
        <div className="column">
          <h3>Twitter Feed 2</h3>
          <p>
            #hashtag?
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="ui vertical stripe segment">
    <div className="ui text container">
      <h3 className="ui header">Blog Feed 1</h3>
      <p>Spicy jalapeno bacon ipsum dolor amet t-bone burgdoggen bacon, jerky salami kielbasa biltong meatloaf pancetta sirloin. Capicola filet mignon bresaola beef ribs swine, porchetta picanha pork shoulder.</p>
      <a className="ui large button">Read More</a>
      <div className="ui divider"></div>


      <h3 className="ui header">Blog Feed 2</h3>
      <p>Tenderloin pork sirloin cow picanha ham capicola bresaola fatback ham hock swine prosciutto tri-tip meatball ball tip. Corned beef tri-tip landjaeger ribeye, bacon salami cupim.</p>
      <a className="ui large button">Read More</a>
    </div>
  </div>
  <div className="ui inverted vertical footer segment">
    <div className="ui container">
      <div className="ui stackable inverted divided centered equal height stackable grid">

        <div className="three wide column">
          <h4 className="ui inverted header">Things</h4>
          <div className="ui inverted link list">
            <a href="https://news.ycombinator.com/" className="item">Hacker News</a>
          </div>
        </div>
        <div className="seven wide column">
          <h4 className="ui inverted header">About</h4>
          <p>Just a guy who likes to code and <s>break</s> build things.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    );
  }
}

export default App;
