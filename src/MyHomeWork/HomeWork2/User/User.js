import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item, onSelectUser, onSelectUsers, onDeleteUser} = this.props;
        return (
            <div>
                {item.id} - {item.name}
                <button onClick={()=>onSelectUser(item.id)}>Check Me!</button>
                <button onClick={()=>onSelectUsers(item.id)}>Push me!</button>
                <button onClick={()=>onDeleteUser(item.id)}>Delete me!</button>
            </div>
        );
    }
}

export default User;
