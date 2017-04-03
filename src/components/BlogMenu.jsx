import React from 'react';
import {Route, NavLink, Link} from 'react-router-dom';

const RecentArticles = React.createClass({
    render: function() {
        const recentArticles = this.props.articles.slice(0, 5).map((article) => {
            return (
                <NavLink to={`${this.props.path}/${article.slug}`} className='item'>
                    {article.title}
                </NavLink>
            );
        });
        return (
            <div className="ui vertical fluid tabular menu">
                {recentArticles}
                {this.props.children}
            </div>
        );
    }
});

const Back = () => (
    <Link to="/blog" className='item'>
        <i className="left chevron icon"></i>
        back to index
    </Link>
)

class BlogMenu extends React.Component {
    render() {
        return (
            <div className='three wide column'>
                <h3 className='ui header'>recent articles</h3>
                <RecentArticles path={this.props.path} articles={this.props.articles}/>
                <Route path={`${this.props.path}/:slug`} component={Back}/>
            </div>
        );
    }
};

export default BlogMenu;
