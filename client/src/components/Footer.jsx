import React from 'react'

const Footer = () => (
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
                  <p>Just a guy who likes to code and <s>break</s>build things.</p>
              </div>
          </div>
      </div>
  </div>
)

export default Footer;
