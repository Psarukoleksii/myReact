import React, {Component} from 'react';
import './User.css';

class User extends Component {
    render() {
        let {item, index, arr} = this.props;
        return (
            <div className={arr[index]}>
                {item.id} - {item.name}  - {item.address.geo.lng}

            </div>
        );
    }
}

export default User;
