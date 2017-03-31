import React from 'react';
import {Link} from 'react-router-dom';


//TODO: refactor stateless functions to use destructured assignment syntax
class Article extends React.Component {
    render() {
        return (

            <div className="ui raised very padded text container segment">
                <h3 className="ui header">{this.props.title}</h3>
                <p>{this.props.content}</p>
                <Link to={`/blog/${this.props.slug}`} className="ui large button">Read More</Link>
            </div>
        )
    }
}



export default Article;
