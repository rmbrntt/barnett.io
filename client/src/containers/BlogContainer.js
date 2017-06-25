import React from 'react'
import Blog from '../components/Blog';
import BlogFeed from '../components/BlogFeed';
import getBlogArticles from '../utils/blogHelpers'
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'


class BlogContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            listLength: 5,
        };
    }

    componentDidMount() {
      return getBlogArticles().then((data) => {
        this.setState({articles: data});
      });
    }

    render() {
      return (
        <div>
          <Route path="/blog" render={(props) => (<Blog articles={this.state.articles} path={this.props.match.url} />)}/>
          <Route exact path="/" render={(props) => (<BlogFeed articles={this.state.articles} />)}/>
          {/* <Blog articles={this.state.articles} path={this.props.match.url} /> */}
      </div>)
    }
};

export default BlogContainer;
