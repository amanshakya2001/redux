import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar bg="light" expand="lg" className='py-3' sticky='top'>
        <Container>
        <Navbar.Brand>
          <Link to='/about'>Home</Link>
        </Navbar.Brand>
        </Container>
    </Navbar>
  )
}
