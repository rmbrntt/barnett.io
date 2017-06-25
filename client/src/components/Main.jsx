import React from 'react'
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Resume from './Resume';

const Main = () => (
    <Router>
        <div>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/resume" component={Resume}/>
            <Footer/>
        </div>
    </Router>

)


export default Main
