import React, {Component} from 'react';
import './RandomPlanet.css'
import PlanetService from "../../../Services/PlanetService";
import Loading from "../../Loading/Loading";
import ErrorIndication from "../../Error/ErrorIndication";
import PlanetInfo from "../Planet-Info/PlanetInfo";

class RandomPlanet extends Component {

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null,
        loading: true,
        error: false,
    }
    PlanetService = new PlanetService();

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 4000);
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random()*17) + 2;
        this.PlanetService.getPlanet(id).then((planet) => {
            this.setState({
                id,
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter,
                loading: false
            })
        }).catch(this.onError)
    }

    onError = (err) => {

        console.error(err);

        this.setState({
            name: null,
            population: null,
            rotationPeriod: null,
            diameter: null,
            loading: false,
            error: true
        })
    }

    render() {
        let {id, name, population, rotationPeriod, diameter, loading, error} = this.state;
        const ErrorMessage = error
            ? <ErrorIndication/>
            : null;

        const OnePlanet = !error && !loading
            ? <PlanetInfo
                id={id}
                name={name}
                population={population}
                rotationPeriod={rotationPeriod}
                diameter={diameter}/>
                : null;

        const IcoLoading = loading
            ? <Loading/>
            : null;

        return (
            <div className={'planet'}>
                {OnePlanet}
                {ErrorMessage}
                <div className={'spinner'}>
                    {IcoLoading}
                </div>
            </div>
        );
    }
}

export default RandomPlanet;
