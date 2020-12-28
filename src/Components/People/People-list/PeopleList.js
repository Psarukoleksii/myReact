import React, {Component} from 'react';
import PeopleService from "../../../Services/PeopleService";
import OnePerson from "./OnePerson";
import {Route, withRouter} from "react-router-dom";
import PersonInfo from "../PersonInfo/PersonInfo";
import './PeopleList.css';

class PeopleList extends Component {

    state = {
        people: [],
    }

    PeopleService = new PeopleService();

    componentDidMount() {
        this.PeopleService
            .getAllPeople()
            .then(people =>
                this.setState({people}))
    }

    render() {
        let {people} = this.state;
        let {match: {url}} = this.props;
        return (
            <div className={'allPeople'}>
                <div className={'peopleList'}>
                    {
                        people.map((value, index) => <OnePerson item={value} key={index} index={index}/>)
                    }
                </div>
                <div className={'peopleInfo'}>
                        <Route path={`${url}/:id`} render={(props) => {
                            let {match: {params: {id}}} = props;
                            return <PersonInfo userId={id} key={id}/>
                        }}/>
                </div>
            </div>
        );
    }
}

export default withRouter(PeopleList);
