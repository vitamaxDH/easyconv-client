import React from 'react'
import {Navbar} from "react-bootstrap";
import logoImg from '../../resource/image/file.png';
import {Link} from "react-router-dom";

const TopNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Navbar.Brand>
                    <img
                        alt=""
                        src="/public/logo192.png"
                        src={logoImg}
                        width="30"
                        height="30"
                        className="d-inline-block"
                    />{' '}
                    <Link className="navbar-brand" to={"/"}><h4>EasyConv</h4></Link>
                </Navbar.Brand>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/"}>Home</Link>
                        </li>
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
    );
}
export default TopNav;
