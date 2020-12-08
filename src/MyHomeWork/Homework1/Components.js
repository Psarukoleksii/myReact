import React, {Component} from 'react';
import {cars, users} from "../../baza";
import Cars from "./CarsComponent/Cars";
import Users from "./UsersComponent/Users";


class Components extends Component {
    render() {
        return (
            <div>
                {
                    cars.map((car, index)=>{
                        let clsX = index%2 ? 'divka' : 'banka'
                        return (<Cars item={car} key={index} cls={clsX}/>)
                    })
                }
                <br />
                <br />
                {
                    users.map((user, index)=>{
                        if(user.age > 30) return (<Users xxx={user} key={index}/>)
                    })
                }
            </div>
        );
    }
}

export default Components;
