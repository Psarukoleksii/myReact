import React, {Component} from 'react';
import {UserServise} from "../UserServise/UserServise.js";
import User from "../User/User.js";

class Users extends Component {

    state = {
        users: [],
        choseOne: null
    }
    UserServise = new UserServise();

    componentDidMount() { this.UserServise.getAllUsers().then(value => this.setState({users: value}))}

    onUserChose = (id) => { this.UserServise.getUserById(id).then(value => this.setState({choseOne: value}))}

    render() {
        let {users, choseOne} = this.state;
        return (
            <div>
                {
                    users.map(user=>{
                        return (<User
                            item={user}
                            key={user.id}
                            onUserChose={this.onUserChose}/>)
                    })
                }
                {
                    choseOne && <h2>{choseOne.id} - {choseOne.name} - {choseOne.address.city}</h2>
                }
            </div>
        );
    }
}

export default Users;
