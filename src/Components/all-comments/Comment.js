import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";

class Comment extends Component {
    render() {
        let {asd, match: {url}} = this.props;
        return (
            <div>
                {asd.id} - {asd.name} - {asd.body} <Link to={`${url}/${asd.id}`}>Info of post</Link>
            </div>
        );
    }
}

export default withRouter(Comment);
