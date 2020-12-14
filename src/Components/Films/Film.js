import React, {Component} from 'react';

class Film extends Component {
    render() {
        let {xxx} = this.props;
        return (
            <div>
                Назва фільму: {xxx.title} - Директор фільму {xxx.director} -Виробник {xxx.producer} -Дата релізу{xxx.release_date}
            </div>
        );
    }
}

export default Film;
