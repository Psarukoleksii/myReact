import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Post extends Component {
    render() {
        let {xxx, match: {url}} = this.props;
        return (
            <div>
                {xxx.id} - {xxx.title} - {xxx.body} - <Link to={`${url}/${xxx.id}`}>Details of Posts</Link>
            </div>
        );
    }
}

export default withRouter(Post);
