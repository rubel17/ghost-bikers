import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {
  const {logOut} = useContext(AuthContext);
 

  const handleSignOut = () =>{
    logOut()
    .then(() => {
            
    }).catch((error) =>console.error(error));
  };





    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
        <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0SPF6HVtIgYfX9DttytZD8vfVQGvS6m3KQg&usqp=CAU"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Navbar.Brand href="/">GHOST BIKERS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>

           
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link onClick={handleSignOut} eventKey={2} href="/register">
            SignOut
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default Header;