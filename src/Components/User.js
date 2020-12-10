import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class User extends Component {
    render() {
        let {users, match:{params:{id}}} = this.props;
        let user = users.find(value=> value.id=== +id)
        return (
            <div>
                <a href="/users">Back</a>
                <h1>{user.name}</h1>
            </div>
        );
    }
}

export default withRouter(User);
