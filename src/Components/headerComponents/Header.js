import React, { Component } from 'react';
import Navbar from '../../../node_modules/react-bootstrap/Navbar';
import Nav from '../../../node_modules/react-bootstrap/Nav';
import Link from 'react-router-dom'

class Header extends Component {
    render() {

        return (
            <Navbar bg="light" expand="lg" sticky='top'>
                <Navbar.Brand href="/">Aviation <i className="fas fa-plane-departure"></i></Navbar.Brand>
                <Navbar.Brand>&ensp;Let's get going!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/" className='text-dark'>Flights</Nav.Link>
                        <Nav.Link href="/hotels" className='text-dark'>Hotels</Nav.Link>
                        <Nav.Link href="/contactus" className='text-dark'>Contact Us</Nav.Link>
                        <Nav.Link href="/login" className='text-dark'>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
