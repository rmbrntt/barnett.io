import Article from './Article';
import React from 'react';

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listLength = this.props.listLength;
        const articles = this.props.articles.slice(0, listLength).map((article) => {
            return (<Article title={article.title} content={article.content} slug={article.slug}/>);
        });
        return (
            <div>
                {articles}
            </div>
        );
    }

};

export default ArticleList;
