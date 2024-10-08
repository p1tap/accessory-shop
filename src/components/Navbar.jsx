// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/accessory-shop/routing-app">routing app </Nav.Link>
        <Nav.Link as={Link} to="/accessory-shop/routing-app/about">about</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default AppNavbar;
