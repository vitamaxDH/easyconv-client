import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import TopNav from "./components/layout/top-nav.component";
import FooterComponent from "./components/layout/footer.component";
import Main from "./components/main/main.component";
import Login from "./components/login/login.component";
import SignUp from "./components/signup/signup.component";

const App = () => {
    return (
        <>
            <Router className="App top">
                <TopNav/>
                <div className="outer">
                    <div className="inner">
                        <Switch>
                            <Route exact path='/' component={Main} />
                            <Route path="/sign-in" component={Login} />
                            <Route path="/sign-up" component={SignUp} />
                        </Switch>
                    </div>
                </div>
                <FooterComponent/>
            </Router>
        </>
    );
}

export default App;
