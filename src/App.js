import Header from "./Components/Header";
import  {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Main from "./Components/Main";
import About from "./Components/About";
import Users from "./Components/Users";
import User from "./Components/User";

function App(){
    const users = [
        {id: 1, name: 'oleksii'},
        {id: 2, name: 'oleg'},
        {id: 3, name: 'maks'}
    ]
    return (
        <>
            <Header />
            <Router>
                <Switch>
                    <Route exact path={'/'} component={Main} /> // exact - точний збіг. Інакше буде показувати перший збіг - Main
                    <Route path={'/about'} component={About} />
                    <Route exact path={'/users'} render={()=>{
                        return <Users users={users}/>
                    }}/>
                    <Route path={'/users/:id'} render={()=>{
                        return <User users={users}/>
                    }}/>
                </Switch>
            </Router>
        </>
    )
}

export default App;
