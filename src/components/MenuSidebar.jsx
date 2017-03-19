import React, { Component } from 'react';

class MenuSidebar extends Component {
  render() {
    return (
        <div className='ui vertical inverted sidebar menu left'>
          <a className='active item' href='test'>Home</a>
          <a className='item'>Resume</a>
          <a className='item'>Blog</a>
          <a className='item'>Contact</a>
          <a className='item'>Github</a>
          <a className='item'>Linkedin</a>

        </div>
    );
  }
}

export default MenuSidebar;
