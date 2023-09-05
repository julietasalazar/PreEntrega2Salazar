import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



import { CartWidget } from './CartWidget';

export const NavBar = () => (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">chucheríasTime</Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link as={Link} to="/category/hogar">Hogar</Nav.Link>
      <Nav.Link as={Link} to="/category/librería">Librería</Nav.Link>
      <Nav.Link as={Link} to="/category/chucherías">Chucherías</Nav.Link>
      </Nav>
      < CartWidget />
    </Container>
  </Navbar>
 
);