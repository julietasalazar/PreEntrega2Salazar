import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import data from "../data/products.json";


import { CartWidget } from './CartWidget';

const categories = data.map(product => product.category)

const uniqueCategories = new Set(categories)


export const NavBar = () => (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand as={NavLink} to="/">chucheríasTime</Navbar.Brand>
      <Nav className="me-auto">
      {/* <NavLink as={NavLink} to="/category/hogar">Hogar</NavLink>
      <NavLink as={NavLink} to="/category/librería">Librería</NavLink>
      <NavLink as={NavLink} to="/category/chucherías">Chucherías</NavLink> */}
      {[...uniqueCategories].map(category => (<NavLink key={category} to={`/category/${category}`}>
        <span>{category}</span>
      </NavLink>
      ))}
      </Nav>
      < CartWidget />
    </Container>
  </Navbar>
 
);