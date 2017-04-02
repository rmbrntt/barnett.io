import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'

// const find = (slug) => ARTICLES.find(article => article.slug == slug)
//
// const ArticleContent = ({match}) => {
//     const article = find(match.params.slug)
//     return (
//         <div className="ui raised very padded text container segment">
//             <h3 className="ui header">{article.title}</h3>
//             <p>{article.content}</p>
//         </div>
//     )
// }

class Article extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      console.log(this.props.match.params)
      console.log(this.props.articles)
        // const articles = this.props.articles;
        // const match = this.props.match;
        const find = (slug) => this.props.articles.find(article => article.slug == slug);
        // console.log("inside article");
        // console.log(this.props.match);
        // console.log(this.props.articles);
        const match = this.props.match;
        const ArticleContent = ({match}) => {
            const article = find(match.params.slug)
            return (
                <div className="ui raised very padded text container segment">
                    <h3 className="ui header">{article.title}</h3>
                    <p>{article.content}</p>
                </div>
            )
        };
        return (
          <ArticleContent match={match} />
)

    };
}

export default Article;
