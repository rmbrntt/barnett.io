import React, { Component } from 'react';

class MenuPointing extends Component {
  render() {
    return (
        <div className='ui menu large secondary inverted pointing'>
          <a className='toc item'>
            <i className='sidebar icon'></i>
          </a>
          <a className='active item' href='test'>Home</a>
          <a className='item'>Resume</a>
          <a className='item'>Blog</a>
          <a className='item'>Contact</a>
        <div className='right item'>
          <a href='https://github.com/rmbrntt' target="_blank"><i className="big github link icon"></i></a>
          <a href='https://www.linkedin.com/in/ryanmbarnett/' target="_blank"><i className="big linkedin link icon"></i></a>
        </div>
        </div>
    );
  }
}

export default MenuPointing;
