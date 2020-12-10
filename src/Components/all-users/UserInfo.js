import React, {Component} from 'react';
import UserServise from "../../Servises/UserServise";

class UserInfo extends Component {
    userService = new UserServise();

    state = {
        user: null
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const user = await this.userService.getOneUser(id)
        this.setState({user})
    }



    render() {
        let {user} = this.state;
        return (
            <div>
                {
                    user && user.name
                }
            </div>
        );
    }
}

export default UserInfo;
