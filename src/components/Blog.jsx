import React from 'react'
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import Article from './Article';

const Blog = ({match}) => (
    <div className="ui vertical stripe segment">
        <div className="ui stackable grid container">
            <div className='four wide column'>
              <Route path={`${match.url}/:topicId`} component={Topic}/>
              <Route exact path={match.url} render={() => (
                  <h3>recent articles</h3>
              )}/>
                <div className="ui vertical fluid tabular menu">
                    <NavLink to={`${match.url}/rendering`} className='item'>
                        Rendering with React
                    </NavLink>
                    <NavLink to={`${match.url}/components`} className='item'>
                        Components
                    </NavLink>
                    <NavLink to={`${match.url}/props-v-state`} className='item'>
                        Props v. State
                    </NavLink>
                </div>
            </div>

            <div className='twelve wide stretched column'>

                <Article/>
            </div>
        </div>

    </div>
)

const Topic = ({match}) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default Blog;
