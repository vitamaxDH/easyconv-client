import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import logoImg from '../../resource/image/file.png'


class NavComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logoImg}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Easy Conv
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav justify-content-end">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#category">Category</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <Nav.Link href="#">Login</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Sign up
                    </Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavComponent;
