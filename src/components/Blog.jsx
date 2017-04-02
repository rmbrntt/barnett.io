import React from 'react'
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import ArticleList from './ArticleList';
import BlogMenu from './BlogMenu';
import Article from './Article';

// function getArticlesFromApiAsync() {
//   return fetch('http://127.0.0.1:8000/articles/')
//     .then((response) => response.json())
//     .then((responseJson) => {
//       return console.log(responseJson);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
// const ARTICLES = getArticlesFromApiAsync();
// const ARTICLES = [
//     {
//         title: 'Article Title 1',
//         content: 'Spicy jalapeno bacon ipsum dolor amet t-bone burgdoggen bacon, jerky salami kielbasa biltong meatloaf pancetta sirloin. Capicola filet mignon bresaola beef ribs swine, porchetta picanha pork shoulder.',
//         slug: 'article-1'
//     }, {
//         title: 'Article Title 2',
//         content: 'Tenderloin pork sirloin cow picanha ham capicola bresaola fatback ham hock swine prosciutto tri-tip meatball ball tip. Corned beef tri-tip landjaeger ribeye, bacon salami cupim.',
//         slug: 'article-2'
//     }, {
//         title: 'Article Title 3',
//         content: 'Spicy jalapeno bacon ipsum dolor amet t-bone burgdoggen bacon, jerky salami kielbasa biltong meatloaf pancetta sirloin. Capicola filet mignon bresaola beef ribs swine, porchetta picanha pork shoulder.',
//         slug: 'article-3'
//     }
// ]
class Blog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ui vertical stripe segment">
                <div className="ui stackable grid container">
                    <BlogMenu path={this.props.path} articles={this.props.articles}/>
                    <div className='thirteen wide stretched column'>
                        <Route path={`${this.props.path}/:slug`} render={(props) => (<Article articles={this.props.articles} {...props}/>)}/>
                        <Route exact path={this.props.path} render={() => (<ArticleList articles={this.props.articles}/>)}/>
                    </div>
                </div>
            </div>
        )
    }
}



// const Article = React.createClass({
//     render: function() {
//         const slug = this.props.match.params.slug;
//         const articles = this.props.articles;
//         console.log(slug);
//         console.log(articles);
//         const article = articles.find(article => article.slug == slug)
//
//
//         return (
//             <div className="ui raised very padded text container segment">
//                 <h3 className="ui header">{article.title}</h3>
//                 <p>{article.content}</p>
//             </div>
//         );
//     }
// });

export default Blog;
