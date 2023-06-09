import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {FaMoon} from "react-icons/fa";


function NavBar() {
  return (
    <Navbar bg="light nav-style" expand="lg">
      <Container>
        <Navbar.Brand href="#home" >Jereen Leblanc</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Status">Status</Nav.Link>            
            <Nav.Link href="#Content">Contact</Nav.Link>
            <Button><FaMoon/></Button>         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
