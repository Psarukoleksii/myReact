import React, {Component} from 'react';
import './Person.css';

class Person extends Component {
    render() {
        let {user, userId} = this.props;
        return (
            <div className={'sectionPerson'}>
                <div className={'personImg'}>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${userId}.jpg`}
                         alt="planet"/>
                </div>
                <div className={'personText'}>
                    <h2>{user.name}</h2>
                    <p>Hair Color: {user.hair_color}</p>
                    <p>Height: {user.height}</p>
                    <p>Mass: {user.mass}</p>
                    <p>Birth Year: {user.birth_year}</p>
                </div>
            </div>

        );
    }
}

export default Person;
