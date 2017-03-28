import React from 'react';
import {Router, Link} from 'react-router-dom';


//TODO: refactor stateless functions to use destructured assignment syntax
class Article extends React.Component {
    render() {
        return (

            <div className="ui raised very padded text container segment">
                <h3 className="ui header">{this.props.title}</h3>
                <p>{this.props.content}</p>
                <Link to={`${this.props.match.url}/${this.props.slug}`} className="ui large button">Read More</Link>
            </div>
        )
    }
}

const ArticleList = React.createClass({
    render: function() {
      const size = this.props.size;
        const articles = this.props.articles.slice(0, size).map((article) => {
            return (<Article title={article.title} content={article.content} match={this.props.match} slug={article.slug}/>);
        });
        return (
            <div>
                {articles}
            </div>
        );
    }
});

export default ArticleList;
