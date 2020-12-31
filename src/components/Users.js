import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Users = () => {

    const users = useSelector(({users}) => users)
    const dispatch = useDispatch();
    console.log(users);


    const handAdd = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const age = e.target[1].value;
        const id = new Date().getTime();
        dispatch({type: 'ADD', payload: {name, age, id}})
        e.target[0].value = '';
        e.target[1].value = '';
    }

    const handDel = (e) => {
        console.log(e.target.parentNode.id);
        dispatch({type: 'DEL', payload: e.target.parentNode.id})
    }

    return (
        <div className={'text'}>
            <form onSubmit={handAdd}>
                <input type="text"/>
                <input type="number"/>
                <button>Send</button>
            </form>
            {
                users.map(value => <div key={value.id} id={value.id}>Name user: {value.name} <br/> Old user: {value.age}
                    <button onClick={handDel}>Delete user</button>
                </div>)
            }
        </div>
    )
}

export default Users;
