import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';

const Navbar1 = () => {
  return (
    <div>
      <Navbar expand="lg" bg="danger" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">News App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
