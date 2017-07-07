import React from 'react'
import {Route, Link, NavLink} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Header = () => (
<div className='ui inverted vertical center aligned header segment' id='header'>
    <div className='ui container'>
        <Menu inverted secondary pointing>
            <NavLink exact to="/" className="item">Home</NavLink>
            <NavLink to="/resume" className="item">Resume</NavLink>
            <div className='right item'>
              <Link to='https://github.com/rmbrntt' target="_blank"><i className="big github link icon"></i></Link>
              <Link to='https://www.linkedin.com/in/ryanmbarnett/' target="_blank"><i className="big linkedin link icon"></i></Link>
            </div>
        </Menu>
    </div>
</div>
)

export default Header;
