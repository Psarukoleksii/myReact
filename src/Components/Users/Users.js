import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import AllUsers from "./all-users/all-users";

class Users extends Component {
    render() {
        return (
            <div>
                <AllUsers />
            </div>
        );
    }
}

export default withRouter(Users);
