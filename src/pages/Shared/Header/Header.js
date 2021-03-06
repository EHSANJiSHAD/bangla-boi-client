import './Header.css'

import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    // console.log(user.email);

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
                            {
                                user && 
                                <>
                                    <Link to='/addItem' >ADD</Link>
                                    <Link to='/manageInventory' >MANAGE</Link>
                                    <Link to='/myItems' >MY ITEMS</Link>
                                </>
                            }
                            <Link to='/blogs' >BLOGS</Link>
                            <Link to='/about' >ABOUT</Link>
                            {
                                user?
                                <button style={{color:"rgb(130 180 64)",border:"1px solid rgb(130 180 64)"}} className='logout-btn' onClick={handleLogOut}>LOGOUT</button>
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