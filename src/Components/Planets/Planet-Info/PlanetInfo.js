import React, {Component} from 'react';
import './PlanetInfo.css';

class PlanetInfo extends Component {
    render() {
        let {id, name, population, rotationPeriod, diameter} = this.props;
        return (
            <div className={'planetInfo'}>
                <div className={'img'}>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet"/>
                </div>
                <div className={'text'}>
                    <h2>{name}</h2>
                    <div className={'item'}>

                    </div>
                    <p>Population: {population}</p>
                    <div className={'item'}>

                    </div>
                    <p>Rotation period: {rotationPeriod}</p>
                    <div className={'item'}>

                    </div>
                    <p>Diameter: {diameter}</p>
                </div>
            </div>
        );
    }
}

export default PlanetInfo;
