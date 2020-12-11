import React, {Component} from 'react';
import {withRouter, Link} from "react-router-dom";

class Comment extends Component {
    render() {
        let {xxx, match:{url}} = this.props;
        return (
            <div>
                {xxx.id} - {xxx.name} - {xxx.body} - <Link to={`${url}/${xxx.id}`}>Details of comment</Link>
            </div>
        );
    }
}

export default withRouter(Comment);
