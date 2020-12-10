import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import AllUsers from "./Components/all-users/AllUsers";
import AllPosts from "./Components/all-posts/AllPosts";
import AllComments from "./Components/all-comments/AllComments";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Link to={"/users"}>Users</Link>
                    </div>
                    <div>
                        <Link to={"/posts"}>Posts</Link>
                    </div>
                    <div>
                        <Link to={'/comments'}>Comments</Link>
                    </div>

                    <div className={'app-route'}>
                        <Switch>
                            <Route path={'/users'} render={(props)=>{
                                return <AllUsers />
                            }}>
                            </Route>

                            <Route path={'/posts'} render={(props)=>{
                                return <AllPosts />
                            }}>
                            </Route>
                            <Route path={'/comments'} render={(props)=>{
                                return <AllComments />
                            }} />

                        </Switch>

                    </div>



                </Router>
            </div>
        );
    }
}

export default App;
