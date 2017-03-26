import React from 'react';
import {Router, Link} from 'react-router-dom';

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
    const articles = this.props.articles.map((article) => {
      return (
        <Article
          title={article.title}
          content={article.content}
          match={this.props.match}
          slug={article.slug}
        />
      );
    });
    return (
      <div>
        {articles}
      </div>
    );
  },
});

export default ArticleList;
