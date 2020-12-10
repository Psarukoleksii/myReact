import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class User extends Component {
    render() {
        let {item, match: {url}} = this.props
        return (
            <div>
                {item.id} - {item.name} - <Link to={`${url}/${item.id}`}>Details about User</Link>
            </div>
        );
    }
}

export default withRouter(User); // Дозволяє наповнити історією цього компонента
