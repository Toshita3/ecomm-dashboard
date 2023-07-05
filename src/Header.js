import {Navbar,Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';

function Header()
{
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Ecomm Project</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/add">Add Product</Nav.Link>
            <Nav.Link href="/update">Update Product</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    )
}

export default Header