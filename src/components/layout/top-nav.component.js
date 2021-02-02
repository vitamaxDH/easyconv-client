import React from 'react'
import {Navbar} from "react-bootstrap";
import logoImg from '../../resource/image/file.png'
import {Link, Route, Switch} from "react-router-dom";
import Login from "../login/login.component";
import SignUp from "../signup/signup.component";
import Main from "../main/main.component";

const TopNav = () => {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Navbar.Brand>
                        <img
                            alt=""
                            src="/public/logo192.png"
                            src={logoImg}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <Link className="navbar-brand" to={"/"}>EasyConv</Link>
                    </Navbar.Brand>
                    {/*<Link className="navbar-brand" to={"/"}>EasyConv</Link>*/}
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="outer">
                <div className="inner">
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path="/sign-in" component={Login} />
                        <Route path="/sign-up" component={SignUp} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}
export default TopNav;
