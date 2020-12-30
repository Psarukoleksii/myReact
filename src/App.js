import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";


const App = () =>{

    const users = useSelector(({users})=> users);
    console.log(users)
    const dispatch = useDispatch();

    const handAdd = (e) =>{
        e.preventDefault();
        const name = e.target[0].value;
        const age = e.target[1].value;
        const id = new Date().getTime();
        dispatch({type: 'ADD', payload: {name, age, id}})
    }


    const handDel = (e) =>{
        dispatch({type: 'DEL', payload: +e.target.value})
    }


    return (
        <div>
            <form onSubmit={handAdd}>
                <input type="text"/>
                <input type="number"/>
                <button>Send</button>
            </form>
            <form>
                <select onChange={handDel}>
                    {
                        users.map(value => <option value={value.id}>{value.name}</option>)
                    }
                </select>
            </form>


        </div>
    )
}

export default App;
