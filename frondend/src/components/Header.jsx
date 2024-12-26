import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <Navbar expand="lg" className="bg-dark" style={{borderBottom:"1px solid white"}}>
                <Container className=''>
                    <Navbar.Brand href="#"className='text-white'>Books Library</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link  className='text-white nav-link' to="/">Home</Link>
                            <Link  className='text-white nav-link' to="/books">Books</Link>
                            <Link  className='text-white nav-link' to="/addBooks">Add Books</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
