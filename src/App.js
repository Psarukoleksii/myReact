import React, {Component} from 'react';
import Planets from "./Components/Planets/Planets";
import Films from "./Components/Films/Films";
import People from "./Components/People/People";
import './App.css'

class App extends Component {

    render() {
        return (
            <div>
                <div className={'planets'}>
                    <h2 >Планети</h2>
                </div>
                <Planets/>
                <div className={'films'}>
                    <h2>Фільми</h2>
                </div>
                <Films/>
                <div className={'people'}>
                    <h2>Люди</h2>
                </div>

                <People/>
            </div>
        );
    }
}

export default App;
