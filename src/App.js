import React, {Component} from 'react';
import {Switch, Link} from "react-router-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AllUsers from "./Components/all-users/AllUsers";
import AllPosts from "./Components/all-posts/AllPosts";
import AllComments from "./Components/all-comments/AllComments";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Link to={'/users'}>Users</Link>
                    </div>
                    <div>
                        <Link to={'posts'}>Posts</Link>
                    </div>
                    <div>
                        <Link to={'comments'}>Comments</Link>
                    </div>


                <Switch>
                    <Route path={'/users'} render={(props)=>{
                        return <AllUsers />
                    }}/>
                    <Route path={'/posts'} render={(props)=>{
                        return <AllPosts />
                    }}/>
                    <Route path={'/comments'} render={(props)=>{
                        return <AllComments />
                    }}/>
                </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
