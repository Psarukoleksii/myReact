import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class OnePerson extends Component {
    render() {
        let {item, match:{url}, index} = this.props;
        return (
            <div>
                <Link to={`${url}/${++index}`}>{item.name}</Link>
            </div>
        );
    }
}

export default withRouter(OnePerson);
