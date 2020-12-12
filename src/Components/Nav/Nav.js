import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import HomePage from "../Home/HomePage";
import Users from "../Users/Users";
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <div>
                <Router>
                    <nav>
                        <img
                            src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png"
                            alt=""/>
                        <div className={'link'}>
                            <ul>
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/users'}>Users</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route path={'/'} exact={true} render={() => {
                            return <HomePage/>
                        }}/>
                        <Route path={'/users'} render={() => {
                            return <Users/>
                        }}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Nav;
