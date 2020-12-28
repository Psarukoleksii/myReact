import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decCounter, incCounter, randomCounter, randomCounterPayload, resetCounter} from "../redux/action-types";

const Counter = () =>{
    const storeCounter = useSelector(({counter})=> counter);
    const dispatch = useDispatch();
    const inc = () => dispatch({type: incCounter})
    const dec = () => dispatch({type: decCounter})
    const reset = () => dispatch({type: resetCounter})
    const random = () => dispatch({type: randomCounter, payload: randomCounterPayload})
    return(
        <div className={'text'}>
            <h2>{storeCounter}</h2>
            <button onClick={inc}>INC</button>
            <button onClick={dec}>DEC</button>
            <button onClick={reset}>RESET</button>
            <button onClick={random}>Random</button>
        </div>
    )
}

export default Counter;
