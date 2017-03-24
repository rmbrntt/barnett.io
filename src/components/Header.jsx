import React from 'react'
import {Route, Link, NavLink} from 'react-router-dom'

const Header = () => (
<div className='ui inverted vertical center aligned header segment'>
    <div className='ui container'>
        <div className='ui menu large inverted secondary pointing'>
            <NavLink exact to="/" className="item">Home</NavLink>
            <NavLink to="/resume" className="item">Resume</NavLink>
            <NavLink to="/blog" className="item">Blog</NavLink>
            <NavLink to="/contact" className="item">Contact</NavLink>
            <div className='right item'>
              <Link to='https://github.com/rmbrntt' target="_blank"><i className="big github link icon"></i></Link>
              <Link to='https://www.linkedin.com/in/ryanmbarnett/' target="_blank"><i className="big linkedin link icon"></i></Link>
            </div>
        </div>
    </div>
</div>
)

export default Header;
