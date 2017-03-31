import React from 'react'
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import ArticleListContainer from '../containers/ArticleListContainer';


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

const Blog = ({match}) => (
    <div className="ui vertical stripe segment">
        <div className="ui stackable grid container">
            {/* <div className='three wide column'>
              <h3 className='ui header'>recent articles</h3>
                <RecentArticles match={match} articles={ARTICLES}/>
                <Route path={`${match.url}/:slug`} component={Back}/>
            </div> */}
            <div className='thirteen wide stretched column'>
                {/* <Route path={`${match.url}/:slug`} component={ArticleContent}/> */}
                <Route exact path={match.url} render={() => (<ArticleListContainer/>)}/>
            </div>
        </div>
    </div>
)

// const RecentArticles = React.createClass({
//     render: function() {
//         const recentArticles = this.props.articles.slice(0, 5).map((article) => {
//             return (
//                 <NavLink to={`${this.props.match.url}/${article.slug}`} className='item'>
//                     {article.title}
//                 </NavLink>
//             );
//         });
//         return (
//             <div className="ui vertical fluid tabular menu">
//                 {recentArticles}
//                 {this.props.children}
//             </div>
//         );
//     }
// });
//
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

const Back = () => (
    <Link to="/blog" className='item'>
        <i className="left chevron icon"></i>
        back to index
    </Link>
)

export default Blog;
