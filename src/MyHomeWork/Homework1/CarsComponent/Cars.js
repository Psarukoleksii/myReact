import React, {Component} from 'react';
import './Cars.css'
class Cars extends Component {
    render() {
        let {item, cls} = this.props
        return (
            <div className={cls}>
                <div>{item.name} {item.engine} {item.old} {item.color}</div>
            </div>
        );
    }
}

export default Cars;
