import React from 'react'
import ArticleList from '../components/ArticleList';



class ArticleListContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            listLength: 5,
        }
    }
    componentDidMount() {
      return fetch('http://127.0.0.1:8000/articles/')
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson);
          return responseJson;
      })
      .catch((error) => {
          console.error(error);
      }).then((data) => {
        this.setState({articles: data});
      });
    }

    render() {
      return <ArticleList articles={this.state.articles} />;
    }
};

export default ArticleListContainer;
