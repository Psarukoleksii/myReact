import React, {Component} from 'react';
import './HomePage.css';
import icon from './ico.png';
import Footer from "../Footer/Footer";

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className={'homePage'}>
                    <div className={'icon'}>
                        <img src={icon} alt=""/>
                    </div>
                    <div className={'homeText'}>
                        <h2>
                            Hello, my dear friend
                        </h2>
                        <p>
                            STAR WARS API
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default HomePage;
