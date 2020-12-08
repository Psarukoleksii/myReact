import React, {Component} from 'react';
import Components from "./MyHomeWork/Homework1/Components";
import Components2 from "./MyHomeWork/HomeWork2/Components2";
import Components3 from "./MyHomeWork/HomeWork3/Components3";
import Class1 from "./MyClassWork/Class1";

class App extends Component {
    render() {
        return (
            <div>
                {/******************HomeWork1********************/}
                {/*<Components />*/}
                {/******************HomeWork1********************/}

                {/******************HomeWork2*********************/}
                {/*<Components2 />*/}
                {/*****************HomeWork2**********************/}

                {/********************HomeWork3************************/}
                {/*<Components3 />*/}
                {/********************HomeWork3************************/}

                <Class1 />
            </div>
        );
    }
}

export default App;
