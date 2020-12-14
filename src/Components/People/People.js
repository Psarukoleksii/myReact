import React, {Component} from 'react';
import PeopleServise from "../../Servises/PeopleServise";
import Man from "./Man";

class People extends Component {

    PeopleServise = new PeopleServise();

    state = {
        people: [],
    }

    async componentDidMount() {
        let people = await this.PeopleServise.getPeople();
        this.setState({people});
    }

    render() {
        let {people} = this.state
        return (
            <div>
                {
                    people.map(value=> <Man asd={value}/>)
                }
            </div>
        );
    }
}

export default People;
