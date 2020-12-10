import React, {Component} from 'react';
import User from "./User";
import UserServise from "../../Servises/UserServise";
import './AllUsers.css';
import {Link, withRouter, Switch, Route} from "react-router-dom";
import UserInfo from "./UserInfo";

class AllUsers extends Component {

    state = {users: []}

    userServise = new UserServise()

    async componentDidMount() {
        let users = await this.userServise.users();
        this.setState({users: users})
    }

    render() {
        let {users} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    users.map(user=> <User item={user} key={user.id}/>)
                }

                <div className={'UserInfo'}>
                    <Switch>
                        <Route path={`${url}/:id`} exact={true} component={UserInfo}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllUsers);
