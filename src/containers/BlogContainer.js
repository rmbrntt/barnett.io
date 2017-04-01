import React from 'react'
import Blog from '../components/Blog';



class BlogContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            listLength: 5,
        };
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
      return <Blog articles={this.state.articles} match={this.props.match}/>;
    }
};

export default BlogContainer;
