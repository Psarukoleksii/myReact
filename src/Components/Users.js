import React, {Component} from 'react';
import { Route, Switch, NavLink, withRouter} from "react-router-dom";
import User from "./User";

class Users extends Component {
    render() {
        console.log(this.props)
        let {users} = this.props
        return (
            <div>
                {
                    users.map(item=>{
                        return <li key={item.id}>
                            <NavLink to={`users/${item.id}`}>{item.name}</NavLink>
                        </li>
                    })
                }
            </div>
        );
    }
}

export default withRouter(Users);
