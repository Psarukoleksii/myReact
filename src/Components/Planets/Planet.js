import React, {Component} from 'react';

class Planet extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                Назва планети: {item.name} - Період обертання {item.rotation_period} - Діаметр планети {item.diameter} - Клімат {item.climate}
            </div>
        );
    }
}

export default Planet;
