import React from 'react'
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import Article from './Article';

const Blog = ({match}) => (
    <div className="ui vertical stripe segment">
        <div className="ui stackable grid container">
            <div className='four wide column'>
              <Route path={`${match.url}/:articleId`} component={ArticleContent}/>
              <Route exact path={match.url} render={() => (
                  <h3>recent articles</h3>
              )}/>
                <div className="ui vertical fluid tabular menu">
                    <NavLink to={`${match.url}/article-1`} className='item'>
                        Article Title 1
                    </NavLink>
                    <NavLink to={`${match.url}/article-2`} className='item'>
                        Article Title 2
                    </NavLink>
                    <NavLink to={`${match.url}/article-3`} className='item'>
                        Article Title 3
                    </NavLink>
                </div>
            </div>

            <div className='twelve wide stretched column'>

                <Article/>
            </div>
        </div>

    </div>
)

const ArticleContent = ({match}) => (
    <div>
        <h3>{match.params.articleId}</h3>
    </div>
)

export default Blog;
