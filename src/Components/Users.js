import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Users extends Component {
    render() {
        const users = [
            {id: 1, name: 'oleksii'},
            {id: 2, name: 'oleg'},
            {id: 3, name: 'maks'}
        ]
        return (
            <div>
                {
                    users.map(item=>{
                        return <li key={item.id} >
                            <NavLink to={`users/${item.id}`}>{item.name}</NavLink>
                        </li>
                    })
                }
            </div>
        );
    }
}

export default Users;
