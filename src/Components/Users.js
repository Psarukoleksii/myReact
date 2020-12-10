import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Users extends Component {

    render() {
        console.log(this.props);
        const {users} = this.props;
        return (
            <div>
                {
                    users.map(item => {
                        return <li key={item.id}>
                            <NavLink to={`users/${item.id}`}>{item.name}</NavLink>
                        </li>
                    })
                }
            </div>
        );
    }
}

export default Users;
