import React, {Component} from 'react';
import './Users.css';

class Users extends Component {
    render() {
        let {xxx} = this.props;
        return (
            <div>
                {xxx.name} {xxx.status.toString()} {xxx.age}
            </div>
        );
    }
}

export default Users;
