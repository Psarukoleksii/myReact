import React, {Component} from 'react';

class UserId extends Component {
    render() {
        let userId = this.props.match.params.id;
        let user;
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === userId) {
                user = users[i];
                break;
            }
        }
        if(user === undefined){
            return <h2>Юзер не знайдений</h2>
        } else {
            return <h2>{user.name}</h2>
        }
    }
}
export default UserId;
