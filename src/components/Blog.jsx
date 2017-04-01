import React from 'react'
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import ArticleList from './ArticleList';
import BlogMenu from './BlogMenu';

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

const Blog = ({match, articles}) => (
    <div className="ui vertical stripe segment">
        <div className="ui stackable grid container">
            <BlogMenu match={match} articles={articles} />
            <div className='thirteen wide stretched column'>
                {/* <Route path={`${match.url}/:slug`} component={ArticleContent}/> */}
                <Route exact path={match.url} render={() => (<ArticleList articles={articles} />)}/>
            </div>
        </div>
    </div>
)



export default Blog;
