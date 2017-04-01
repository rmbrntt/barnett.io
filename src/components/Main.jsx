import React from 'react'
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
// import Blog from './Blog';
import BlogContainer from '../containers/BlogContainer';
import Contact from './ContactForm';
import Resume from './Resume';
const Main = () => (
    <Router>
        <div>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/blog" component={BlogContainer}/>
            <Route path="/contact" component={Contact}/>
            <Footer/>
        </div>
    </Router>

)


export default Main
