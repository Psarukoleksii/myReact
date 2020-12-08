import React, {Component} from 'react';
import User from "../User/User.js";

class Users extends Component {

    state = {
        users: [],
        arr: ['red', 'blue', 'green', 'yellow', 'tomato', 'silver', 'brown', 'aqua', 'chocolate', 'darkblue'],
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value=> value.json())
            .then(users=> this.setState({users}))
    }

    usersFilterId = () => {
        const newUsers =  [...this.state.users];
        const sortedArr = newUsers.sort((a,b) => {
            if(a.name < b.name) {
                return -1
            }
        })
        this.setState({users: sortedArr})
    }

    usersSortByLocation = () => {
        const newUsers = [...this.state.users];
        const sorteedArr = newUsers.sort((a,b)=>{
            if (a.address.geo.lng > b.address.geo.lng){
                return -1
            }
        })
        this.setState({users: sorteedArr})
    }

    usersRandom = () => {
        let usersState = [...this.state.users]
        usersState.sort(()=> {
            return 0.5 - Math.random();
        })
        this.setState({users: usersState})
    }

    usersBackgroundRandom = ()=>{
        let arr = [...this.state.arr];
        arr.sort(()=>{
            return 0.5 - Math.random();
        })
        this.setState({arr: arr})
    }



    render() {
        let {users, arr} = this.state;
        return (
            <div>
                {
                    users.map((user, index)=> <User item={user} key={user.id} index={index} arr={arr} />)
                }
                <button onClick={this.usersSortByLocation}>Sort (geoLocation)</button>
                <button onClick={this.usersFilterId}>Sort (name)</button>
                <button onClick={this.usersRandom}>Random Users Id</button>
                <button onClick={this.usersBackgroundRandom}>Random BackGround</button>
            </div>
        );
    }
}

export default Users;
