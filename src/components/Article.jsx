import React from 'react';
import {Link} from 'react-router-dom';


const find = (slug) => ARTICLES.find(article => article.slug == slug)

const Article = ({match}) => {
    const article = find(match.params.slug)
    return (
        <div className="ui raised very padded text container segment">
            <h3 className="ui header">{article.title}</h3>
            <p>{article.content}</p>
        </div>
    )
}

export default Article;
