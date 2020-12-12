import React, {Component} from 'react';
import UserServise from "../../../Servises/UserServise/UserServise";
import {withRouter} from "react-router-dom";

class UserInfo extends Component {

    UserServise = new UserServise();

    state = {
        user: null,
    }

    async componentDidMount() {
        let {userId} = this.props;
        let user = await this.UserServise.getOneUser(userId);
        this.setState({user});
    }

    render() {
        let {user} = this.state;
        let {match:{url}} = this.props;
        return (
            <div>
                {
                    user && <div>
                        <div>
                            <h2>{user.name}</h2>
                            <br/>
                            <p>{user.username}</p>
                            <hr/>
                        </div>
                        <div>
                            <h3>Phone: {user.phone}</h3>
                            <hr />
                            <h3>Email: {user.email}</h3>
                            <hr />
                            <h3>Site: {user.website}</h3>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default withRouter(UserInfo);
