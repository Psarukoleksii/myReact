import React, {Component} from 'react';
import PlanetsServise from "../../Servises/PlanetsServise";
import Planet from "./Planet";

class Planets extends Component {

    PlanetsServise = new PlanetsServise();

    state = {
        planets: [],
    }

    async componentDidMount() {
        let planets = await this.PlanetsServise.getPlanets();
        this.setState({planets});
    }

    render() {
        let {planets} = this.state;
        return (
            <div>
                {
                    planets.map(value=> <Planet item={value}/>)
                }
            </div>
        );
    }
}

export default Planets;
