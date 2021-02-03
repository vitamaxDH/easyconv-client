import React from 'react'
import {Nav, Navbar} from "react-bootstrap";
import logoImg from '../../resource/image/file.png';
import {Link} from "react-router-dom";

const TopNav = () => {
    return (
        <Navbar collapseOnSelect expand="md" variant="light">
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
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <Link className="nav-link" to={"/"}>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
export default TopNav;
