import React from 'react'

const Footer = () => (
  <div className="ui inverted vertical footer segment" id='footer'>
      <div className="ui container">
          <div className="ui stackable inverted divided centered equal height stackable grid">
              {/* <div className="three wide column">
                  <h4 className="ui inverted header">rand-o-list</h4>
                  <div className="ui inverted link list">
                      <a href="https://news.ycombinator.com/" className="item">Hacker News</a>
                  </div>
              </div> */}
              <div className="five wide column">
                  <h4 className="ui inverted header">About</h4>
                  <p>I like building things in Python and React. I'm also familiar with C#, SQL and Node. </p>
              </div>
          </div>
      </div>
  </div>
)

export default Footer;
