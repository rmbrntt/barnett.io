import React from 'react'
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import ArticleList from './ArticleList';
import BlogMenu from './BlogMenu';
import Article from './Article';


class BlogFeed extends React.Component {
    render() {
        return (
            <div className="ui vertical stripe segment">
                <div className="ui text container">
                      <ArticleList articles={this.props.articles}/>
                </div>
            </div>
        )
    }
}

export default BlogFeed;
