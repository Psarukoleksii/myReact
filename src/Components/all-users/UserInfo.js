import React, {Component} from 'react';
import UserServise from "../../Servises/UserServise";
import {withRouter} from "react-router-dom";

class UserInfo extends Component {

    state = {
        user: null,
    }

    UserServise = new UserServise();

    async componentDidMount() {
        const {userId} = this.props;
        const user = await this.UserServise.getUser(userId);
        this.setState({user})
    }

    render() {
        let {user} = this.state;
        return (
            <div>
                {user && <div>{user.id} - {user.name} - {user.email}</div>}
            </div>
        );
    }
}
export default UserInfo;
