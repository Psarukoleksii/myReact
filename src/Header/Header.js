import React, {Component} from 'react';
import './Header.css'
import { Switch, Route, BrowserRouter as Router, Link} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import RandomPlanet from "../Components/Planets/Random-Planet/RandomPlanet";
import PeopleList from "../Components/People/People-list/PeopleList";

class Header extends Component {
    render() {
        return (
            <div className={'header'}>
                <Router>
                    <ul>
                        <li><Link to={'/'}>STAR DB</Link></li>
                        <li><Link to={'/planets'}>Planets</Link></li>
                        <li><Link to={'/people'}>People</Link></li>
                    </ul>
                    <Switch>
                        <Route exact={true} path={'/'} render={()=>{
                            return <HomePage />
                        }}/>
                        <Route path={'/planets'} render={()=>{
                            return <RandomPlanet />
                        }}/>
                        <Route path={'/people'} render={()=>{
                            return <PeopleList />
                        }}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Header;
