import React, {Component} from 'react';
import User from "../User/User";
import Button from "../Button/Button";

class AllUsers extends Component {

    state = {
        users: [],
        choseOne: null,
        choseAll: [],
        comments: [],
    }

    myRef = React.createRef();

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value=> value.json())
            .then(users=>{
                this.setState({users})
            })
    }

    onSelectUser = (id) => {
        let {users} = this.state;
        let find = users.find(value => value.id === id);
        this.setState({choseOne: find});
    }

    onSelectUsers = (id) =>{
        let {users, choseAll} = this.state;
        let findAll = users.find(value=> value.id === id);
        choseAll.push(findAll);
        this.setState({choseAll})
    }

    onDeleteUser = (id) => {
        let {users} = this.state;
        users.splice(id-1, id);
        this.setState({users: users})
    }

    sbmt = (e) => {
        e.preventDefault();
        let id = e.target[0].value;
        let name = e.target[1].value;
        this.state.users.push({id, name});
        this.setState({users: this.state.users});
        e.target[1].value = '';
    }

    addPost = () => {
        let comment = this.myRef.current.value;
        let {comments} = this.state;
        comments.push(comment);
        this.setState({
            comments: comments,
        })
        this.myRef.current.value = '';
    }

    render() {
        let {users, choseOne, choseAll} = this.state;
        return (
            <div>
                {
                    users.map(user=>{
                        return (<User
                            item={user}
                            key={user.id}
                            onSelectUser={this.onSelectUser}
                            onSelectUsers={this.onSelectUsers}
                            onDeleteUser={this.onDeleteUser} />)
                    })
                }
                {
                    choseOne && <h2>{choseOne.id} - {choseOne.name} - {choseOne.address.city}</h2>
                }
                {
                    choseAll.map(chose=>{
                        return (<h2>{chose.id}- {chose.name} - {chose.address.city}</h2>)
                    })
                }
                <form onSubmit={this.sbmt}>
                    <input type="number" value={users.length + 1}/>
                    <input type="text"/>
                    <button>AddUser</button>
                </form>

                <Button />


                <br/>
                <br/>
                <br/>

                <textarea ref={this.myRef}> </textarea>
                <button onClick={this.addPost}>Add post</button>
                <br />
                <div>
                    <ul>
                        {this.state.comments.map((value,index) => <li key={index.toString()}>{value}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default AllUsers;
