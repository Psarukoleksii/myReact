import React, {Component} from 'react';
import PeopleService from "../../../Services/PeopleService";
import {withRouter} from "react-router-dom";
import Person from "../Person/Person";
import Loading from "../../Loading/Loading";
import ErrorIndication from "../../Error/ErrorIndication";
import './PersonInfo.css'
// import NonePeople from "../NonePeople/NonePeople";

class PersonInfo extends Component {

    PeopleService = new PeopleService();

    state = {
        user: null,
        loading: true,
        error: false,
    }

    componentDidMount() {
        let {userId} = this.props;
        this.PeopleService.getOnePerson(userId)
            .then(user =>
                this.setState({user: user, loading: false}))
            .catch(this.onError)
    }

    onError = (err) => {
        console.error(err);
        this.setState({
            loading: false,
            error: true
        })
    }

    render() {
        let {user, loading, error} = this.state;
        let {userId} = this.props;
        const IcoLoading = loading ? <Loading/> : null;
        const ErrorInd = error ? <ErrorIndication/> : null;
        const InfoAboutUser = !error && !loading
            ? <Person user={user} userId={userId}/>
            : null;


        return (
            <div>
                {IcoLoading}
                {ErrorInd}
                {InfoAboutUser}
            </div>
        );
    }
}

export default withRouter(PersonInfo);
