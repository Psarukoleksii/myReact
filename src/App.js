import Header from "./Components/Header";
import  {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Main from "./Components/Main";
import About from "./Components/About";
import Users from "./Components/Users";
import UserId from "./Components/UserId";


function App(){
    return (
        <>
            <Header />
            <Router>
                <Switch>
                    <Route exact path={'/'} component={Main} /> // exact - точний збіг. Інакше буде показувати перший збіг - Main
                    <Route path={'/about'} component={About} />
                    <Route exact path={'/users'} component={Users} />
                    <Route path={'/users/:id'} component={UserId} />
                </Switch>
            </Router>
        </>
    )
}

export default App;
