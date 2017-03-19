import React, { Component } from 'react';

class MenuFixed extends Component {
  render() {
    return (
        <div className='ui large top fixed menu transition hidden'>
          <div className='ui container'>
            <a className='active item' href='test'>Home</a>
            <a className='item'>Resume</a>
            <a className='item'>Blog</a>
            <a className='item'>Contact</a>
            <div className='right menu'>

                <a href='https://github.com/rmbrntt' target="_blank">
                  <div className='ui icon button'>
                    <i className="large github link icon"></i>
                  </div>
                  </a>
                  <a href='https://www.linkedin.com/in/ryanmbarnett/' target="_blank">
                    <div className='ui icon button'>
                      <i className="large linkedin link icon"></i>
                    </div>
                    </a>
            </div>
          </div>
        </div>
    );
  }
}

export default MenuFixed;
