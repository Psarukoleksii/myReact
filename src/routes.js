import {Switch, Route} from 'react-router-dom'
import React from 'react'


import HomePage from "./HomePage/HomePage";
import RandomPlanet from "./Components/Planets/Random-Planet/RandomPlanet";
import PeopleList from "./Components/People/People-list/PeopleList";


// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{

    return (
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/planets" component={RandomPlanet} />
            <Route path="/people" component={PeopleList}/>
        </Switch>
    )
}

