import React, {Component} from 'react';

class Man extends Component {
    render() {
        let {asd} = this.props;
        return (
            <div>
                Ім'я: {asd.name} -Висота: {asd.height} см - Колір очей: {asd.eye_color} -Рік народження: {asd.birth_year}
            </div>
        );
    }
}

export default Man;
