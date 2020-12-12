import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import './HomePage.css'

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className={'homepage'}>
                    <div className={'main-react'}>
                        <h2>React</h2>
                    </div>
                    <div className={'photo'}>
                        <img src="https://img.icons8.com/ios-glyphs/452/react.png" alt=""/>
                    </div>
                    <div className={'text'}>
                        <p>This's React project</p>
                    </div>
                </div>
                <div className={'footer'}>
                    <h3>Footer</h3> <br />
                    Task OWU <br />
                    2020
                </div>
            </div>

        );
    }
}

export default withRouter(HomePage);
