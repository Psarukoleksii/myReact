import React, {Component} from 'react';
import {userServise} from "./userServise";
import ErrorIndication from "./ErrorIndication";

class User extends Component {

    myInput = React.createRef();
    userServise = new userServise();

    state = {
        inputValue: '',
        user: null,
        error: false,
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        let id = +this.myInput.current.value;
        let user = this.userServise.getUserById(id).catch(this.onError)
        this.setState({user});
    }

    onError = (err) =>{
        this.setState({error: true, user: null})
    }

    inputContent = () => {
        this.setState({inputValue: this.myInput.current.value})
    }

    render() {
        let {inputValue, user, error} = this.state;
        const ErrorMessage = error? <ErrorIndication /> : null;
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type={"number"} ref={this.myInput} value={inputValue} onInput={this.inputContent}/>
                    <button>Choose user</button>
                </form>
                {user && <div>{user.id} - {user.name}</div>}
                {ErrorMessage}
            </div>
        );
    }
}

export default User;
