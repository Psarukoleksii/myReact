import React from 'react';
import './App.css'
import Header from "./Header/Header";
import Routes from './routes';

const App = () => {

    return (
        <div className={'header'}>
            <Header/>
            <Routes/>
        </div>
    );
}

export default App;
