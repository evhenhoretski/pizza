import React, {Component} from 'react'
import {
    Navbar,
    Nav,
    FormControl,
    Container,
    Form,
    Button
} from 'react-bootstrap'
import logo from './logo192.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from'../Pages/Home'
import About from'../Pages/About'
import Contacts from'../Pages/Contacts'
import Blog from'../Pages/Blog'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />Pizza
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> Home </Nav.Link>
                                <Nav.Link href="/about"> About us </Nav.Link>
                                <Nav.Link href="/contacts"> Contacts </Nav.Link>
                                <Nav.Link href="/blog"> Blog </Nav.Link>
                            </Nav>
                            <Form flex>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="form-inline my-2 my-lg-0"
                                />
                            </Form>
                            <Button variant="outline-info">Search</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/blog" component={Blog} />
                    </Switch>
                </Router>
            </>
        );
    }
}
