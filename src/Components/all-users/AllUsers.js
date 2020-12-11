import React, {Component} from 'react';
import UserServise from "../../Servises/UserServise";
import User from "./User";
import {Route, Switch, withRouter} from "react-router-dom";
import UserInfo from "./UserInfo";

class AllUsers extends Component {

    UserServise = new UserServise();

    state = {
        users: [],
    }

    async componentDidMount() {
        let users = await this.UserServise.users();
        this.setState({users})
    }

    render() {
        let {users} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    users.map(value=> <User item={value} key={value.id}/>)
                }

                <hr />
                    <Switch>
                        <Route path={`${url}/:id`} render={(props)=>{
                            const {match:{params:{id}}} = props;
                            return <UserInfo userId={id} key={id}/>
                        }}/>
                    </Switch>
                <hr />
            </div>
        );
    }
}

export default withRouter(AllUsers);
