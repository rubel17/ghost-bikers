import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';



const Header = () => {
  const {user, logOut} = useContext(AuthContext);
 

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
        <Navbar.Brand>GHOST BIKERS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/blog">Blog</Link>
            <Link className='link' to="/servicesall">ServicesAll</Link>
            {
              user?<Link className='link' to='/myReview'>My Review</Link> : ''

            }

           
          </Nav>
          <Nav>
            <Link className='link' to="/login">Login</Link>
            {
            user?.uid? <Link className='link' onClick={handleSignOut}>SignOut</Link>
            :
            <Link className='link'  to='/register'>Register Now</Link>
          }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default Header;