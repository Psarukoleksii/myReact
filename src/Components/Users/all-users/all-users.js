import React, {Component} from 'react';
import UserServise from "../../../Servises/UserServise/UserServise.js";
import User from "../User/User";
import './all-users.css'
import {withRouter, Route, Switch} from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo";
import PostServise from "../../../Servises/PostServise/PostServise";
import Post from "../Post/Post";

class AllUsers extends Component {

    userServise = new UserServise();
    postServise = new PostServise();

    state = {
        users: [],
        posts: [],
    }

    async componentDidMount() {
        let users = await this.userServise.users();
        this.setState({users})
    }

    chosePost = async (id) => {
        const posts = await this.postServise.posts(id);
        this.setState({posts})
    }

    render() {
        let {users, posts} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                <div className={'myTitle'}>
                    <h2>Users</h2>
                </div>
                <div className={'myUsers'}>
                    <div className={'allUsers'}>
                        {
                            users.map(value => <User item={value} key={value.id} chosePost={this.chosePost}/>)
                        }
                    </div>
                    <div className={'userInfo'}>
                        <Switch>
                            <Route path={`${url}/:id`} render={(props) => {
                                let {match: {params: {id}}} = props;
                                return <UserInfo userId={id} key={id}/>
                            }}/>
                        </Switch>
                    </div>
                </div>
                <div className={'posts'}>
                    {
                        posts.map(value => <Post xxx={value} key={value.id}/>)
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(AllUsers);
