import './Header.css'

import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () =>{
        signOut(auth);
    }
    return (
        <div className=' rounded-pill'>
            <Navbar collapseOnSelect expand="lg"  >
                <Container>
                    <Navbar.Brand as={Link} to='/' className=' border-color-light  border border-5 text-light p-2 rounded-pill me-5 align-center  shadow-lg text'>BANGLA BOI</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='nav-bar nav-bar-bg rounded-pill ' >
                        
                            <Link to='/home' >HOME</Link>
                            <Link to='/blogs' >BLOGS</Link>
                            {
                                user?
                                <button className='logout-btn' onClick={handleLogOut}>LOG OUT</button>
                                :
                                <Link to='/login' >LOGIN</Link>
                            }

                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;