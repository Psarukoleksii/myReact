import React, {Component} from 'react';
import {withRouter, Link} from "react-router-dom";
import './User.css'

class User extends Component {
    render() {
        let {item, match:{url}, chosePost} = this.props;
        return (
            <div className={'userSection'}>
                <p>
                    {item.id} - {item.name}
                </p>
                <Link to={`${url}/${item.id}`} >Details</Link>
                <button onClick={()=>chosePost(item.id)}>User post</button>
                <hr />
            </div>
        );
    }
}

export default withRouter(User);
