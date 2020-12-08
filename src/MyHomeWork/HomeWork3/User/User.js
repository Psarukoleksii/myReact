import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item, onUserChose} = this.props;
        return (
            <div>
                {item.id} - {item.name}
                <button onClick={()=>{onUserChose(item.id)}}>Click</button>
            </div>
        );
    }
}

export default User;
