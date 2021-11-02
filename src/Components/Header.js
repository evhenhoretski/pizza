import React from 'react'
import { useSelector } from 'react-redux';
import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap'
import logo from './logo.png'
import { NavLink } from "react-router-dom";

const Header = () => {
    const cartItems = useSelector(state => state.cartItems.items);
    return (
        <>
            <Navbar collapseOnSelect expand="md" className="header">
                <Container>
                    <Navbar.Brand href="/" className="logo-wrapper">
                        <img
                            src={logo}
                            height="50"
                            width="50"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                        <p className="logo">Мамасіта-Піца</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="flex-right">
                        <Nav className="mr-auto">
                            <NavLink 
                                to="/menu" 
                                className="header-link" 
                                activeClassName="header-link-active"
                            > 
                                Меню
                            </NavLink>
                            <NavLink 
                                to="/cart" 
                                className="header-link"
                                activeClassName="header-link-active"
                            >
                                Замовлення
                                {!!cartItems.length && <span> ({cartItems.length})</span>}
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>  
        </>
    );
}

export default Header;