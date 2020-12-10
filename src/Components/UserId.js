import React, {Component} from 'react';
import {withRouter} from 'react-router';

class UserId extends Component {

    render() {
        console.log(this.props);
        let {users,match:{params:{id}}} = this.props
        let user = users.find(value => value.id === +id)
        return(
            <div>
                <h1>{user.name}</h1>
            </div>
        )
    }
}
export default withRouter(UserId);
